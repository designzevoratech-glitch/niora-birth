"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { articles } from "@/lib/blog-data";
import {
  Sparkles,
  Search,
  Clock,
  ArrowRight,
} from "lucide-react";
import CtaBanner from "@/components/sections/CtaBanner";

const categories = ["All", "Cost & Guides", "Out-of-Station Care", "Treatment Science", "Preservation"];

export default function BlogPage() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((art) => {
    const matchesCat = selectedCat === "All" || art.category === selectedCat;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredArticle = articles[0];

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-cream-bg">
      {/* 1. Hero */}
      <section className="py-16 md:py-20 px-6 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mauve-rose/10 border border-mauve-rose/20 text-mauve-rose text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Knowledge & Patient Guidance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-plum-deep font-bold mb-6 leading-tight"
          >
            Guidance for Your<br />
            <span className="italic bg-gradient-to-r from-mauve-rose to-blush-pink bg-clip-text text-transparent">
              Fertility Journey.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-charcoal-text/80 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Clear medical guides, cost breakdowns, and practical advice for patients traveling to Kerala for treatment.
          </motion.p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative mb-8">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-text/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, costs, IVF, ICSI..."
              className="w-full pl-12 pr-4 py-3.5 rounded-full border-2 border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10 outline-none transition-all text-sm bg-zinc-50"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCat === cat
                    ? "bg-plum-deep text-white shadow-md"
                    : "bg-cream-bg text-charcoal-text/75 hover:bg-mauve-rose/20 hover:text-plum-deep"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Featured Article */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white border border-cream-bg shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-mauve-rose px-3.5 py-1.5 rounded-full bg-mauve-rose/10 border border-mauve-rose/20 inline-block mb-4">
                Featured Guide
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-plum-deep font-bold mb-4 leading-snug">
                {featuredArticle.title}
              </h2>
              <p className="text-sm sm:text-base text-charcoal-text/75 leading-relaxed mb-6">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-charcoal-text/60 mb-6">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredArticle.readTime}</span>
                <span>•</span>
                <span>{featuredArticle.date}</span>
              </div>
              <Link
                href={`/blog/${featuredArticle.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-plum-deep text-white font-semibold text-xs sm:text-sm hover:bg-mauve-rose transition-colors"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-5 relative h-[260px] sm:h-[320px] rounded-3xl overflow-hidden">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Articles Grid */}
      <section className="py-12 px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((art) => (
              <div
                key={art.slug}
                className="bg-white rounded-3xl overflow-hidden border border-cream-bg shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 w-full">
                    <Image src={art.image} alt={art.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-plum-deep">
                        {art.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-plum-deep mb-3 leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-text/75 leading-relaxed mb-4">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 flex justify-between items-center text-xs text-charcoal-text/60 border-t border-cream-bg/60 pt-4">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                  <Link
                    href={`/blog/${art.slug}`}
                    className="text-mauve-rose font-semibold hover:text-plum-deep transition-colors flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
