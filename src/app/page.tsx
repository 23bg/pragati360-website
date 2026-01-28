import { redirect } from 'next/navigation';

export default function RootPage() {
    redirect('/en'); // or 'hi', 'mr', whatever your default is
}
