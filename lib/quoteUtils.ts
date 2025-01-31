import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/lib/firebaseConfig';

export interface QuoteFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
  createdAt?: Date;
}

export async function submitQuote(formData: QuoteFormData) {
  try {
    const quotesRef = collection(db, 'bytebase_website_quotes');
    const quoteData = {
      ...formData,
      createdAt: new Date(),
    };
    
    const docRef = await addDoc(quotesRef, quoteData);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting quote:', error);
    throw new Error('Failed to submit quote');
  }
}