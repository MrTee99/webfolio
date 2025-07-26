import { addDoc, collection } from 'firebase/firestore';
import { firebase } from '.';

type ContactForm = { name: string; email: string; subject: string; message: string };
export const SubmitContact = async (data: ContactForm) => {
  try {
    await addDoc(collection(firebase.firestore, 'contact'), { ...data, created_at: new Date().toISOString() });
    return { isSuccess: true };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return { isSuccess: false };
  }
};
