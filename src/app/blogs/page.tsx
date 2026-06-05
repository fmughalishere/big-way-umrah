"use client"
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Blogs from '../../components/sections/Blogs';
export default function BlogsPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <Blogs showAll={true}/>
      <Footer />
    </main>
  );
}