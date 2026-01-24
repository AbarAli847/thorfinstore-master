export default async function CategoryPage({ params }) {

    const { slug } = await params; 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 text-center">
        <p className="text-gray-400 uppercase tracking-widest text-sm mb-2 font-bold">
          Testing Slug Concept
        </p>
        
        {/* Jo bhi aap URL mein likhenge wo yahan nazar aayega */}
        <h1 className="text-6xl md:text-8xl font-black text-black uppercase">
          {slug}
        </h1>

        <div className="mt-6 text-gray-500">
          <p>Aapne URL mein <span className="font-mono bg-gray-100 px-2 py-1 text-red-500">/category/{slug}</span> likha hai.</p>
        </div>
      </div>
    </div>
  );
}