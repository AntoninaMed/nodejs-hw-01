import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises";

export const thanos = async () => {
    try {
     const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);
        const remainingContacts = contacts.filter(() => Math.random() >= 0.5);
        const toStringify = JSON.stringify(remainingContacts, null, 2);

        await fs.writeFile(PATH_DB, toStringify, 'utf-8');
        console.log(remainingContacts.length);
    
    } catch (error) {
        console.error("Error", error);
    }
};

await thanos();