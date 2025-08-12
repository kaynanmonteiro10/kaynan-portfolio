import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Tag, BookOpen, Search, Filter } from 'lucide-react';
import { articles } from '../data/portfolio';

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ['Todos', ...new Set(articles.map(article => article.category))];
  
  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'Todos' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Ciência & Fé': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Automação': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Lógica': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Produtividade': 'bg-orange-500/20 text-orange-400 border-orange-500/30'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  const ArticleCard = ({ article, index }) => (
    <motion.article
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
      onClick={() => setSelectedArticle(article)}
    >
      <div className="p-6">
        {/* Article Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`px-3 py-1 rounded-full border text-xs font-medium ${getCategoryColor(article.category)}`}>
            {article.category}
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              {formatDate(article.publishDate)}
            </div>
            <div className="flex items-center gap-1">
              <Clock size={12} />
              {article.readTime}
            </div>
          </div>
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 px-2 py-1 bg-secondary text-foreground rounded text-xs"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
          {article.tags.length > 3 && (
            <span className="text-xs text-muted-foreground">
              +{article.tags.length - 3} tags
            </span>
          )}
        </div>

        {/* Read More Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
        >
          <BookOpen size={16} />
          Ler artigo completo
        </motion.button>
      </div>
    </motion.article>
  );

  return (
    <section id="articles" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Meus <span className="gradient-text">Artigos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reflexões sobre tecnologia, ciência, fé e produtividade
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md mx-auto md:mx-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2 p-1 bg-secondary rounded-lg">
              <Filter size={20} className="text-muted-foreground ml-2" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          <AnimatePresence mode="wait">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-12"
              >
                <BookOpen className="mx-auto mb-4 text-muted-foreground" size={48} />
                <h3 className="text-xl font-semibold mb-2">Nenhum artigo encontrado</h3>
                <p className="text-muted-foreground">
                  Tente ajustar os filtros ou termo de busca
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-card border border-border rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Quer saber mais?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Publico regularmente artigos sobre tecnologia, automação, produtividade e reflexões 
            sobre a intersecção entre ciência e fé. Fique por dentro das novidades!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Receber Notificações
          </motion.button>
        </motion.div>

        {/* Article Modal */}
        <AnimatePresence>
          {selectedArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedArticle(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-card border border-border rounded-xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`px-3 py-1 rounded-full border text-sm font-medium ${getCategoryColor(selectedArticle.category)}`}>
                        {selectedArticle.category}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {formatDate(selectedArticle.publishDate)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          {selectedArticle.readTime}
                        </div>
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{selectedArticle.title}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {selectedArticle.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="p-2 hover:bg-secondary rounded-lg transition-colors ml-4"
                  >
                    ✕
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-3 py-1 bg-secondary text-foreground rounded-full text-sm"
                    >
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {selectedArticle.excerpt}
                  </p>
                  
                  {selectedArticle.pdfPath && (
                    <div className="mb-6">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => window.open(selectedArticle.pdfPath, '_blank')}
                        className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                      >
                        <BookOpen size={20} />
                        Ler Artigo Completo (PDF)
                      </motion.button>
                    </div>
                  )}
                  
                  <div className="mt-6 p-4 bg-secondary/50 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Sobre o artigo:</strong> Uma análise profunda que explora como diferentes 
                      disciplinas científicas podem contribuir para questões fundamentais da existência, 
                      integrando matemática, biologia, lógica e fé de forma interdisciplinar.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Articles;

