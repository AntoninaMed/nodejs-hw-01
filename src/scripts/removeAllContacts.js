import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises"

export const removeAllContacts = async () => {
    try {
        const emptyContacts = [];
        
    const toStringify = JSON.stringify(emptyContacts, null, 2);
    
    await fs.writeFile(PATH_DB, toStringify, 'utf-8');
        
    } catch (error) {
        console.error('Cannot remove all contacts', error);
    }
};

await removeAllContacts();