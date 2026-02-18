import React from 'react';
import SectionWrapper from './SectionWrapper';
import { ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    { title: "Como a automação RPA transforma empresas", category: "Inovação" },
    { title: "Gestão jurídica na era digital", category: "Insights" },
    { title: "O futuro do atendimento multicanal", category: "Tecnologia" }
  ];

  return (
    <SectionWrapper id="blog" bg="gray">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-semibold text-brand-dark">Blog Ikatec</h2>
          <p className="mt-2 text-gray-500 font-light">Fique por dentro das novidades e insights.</p>
        </div>
        <a href="#" className="hidden md:flex items-center text-brand-blue font-semibold hover:text-brand-dark transition-colors">
          Ver todos os posts <ArrowRight size={16} className="ml-2" />
        </a>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {posts.map((post, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all border border-transparent hover:border-brand-blue/20">
            <div className="h-48 bg-gray-200 relative">
               <img src={`https://picsum.photos/400/250?random=${idx}`} alt="Blog thumbnail" className="w-full h-full object-cover" />
               <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-brand-blue uppercase shadow-sm">
                 {post.category}
               </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">
                {post.title}
              </h3>
              <p className="text-gray-500 font-light mb-4">
                Descubra como aplicar essas estratégias no seu negócio hoje mesmo...
              </p>
              <a href="#" className="text-brand-blue font-semibold hover:underline text-sm">
                Ler mais
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center md:hidden">
        <a href="#" className="inline-flex items-center text-brand-blue font-semibold hover:text-brand-dark">
          Ver todos os posts <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </SectionWrapper>
  );
};

export default Blog;