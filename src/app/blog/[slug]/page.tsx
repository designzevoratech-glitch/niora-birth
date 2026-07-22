import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getArticleBySlug, articles } from "@/lib/blog-data";
import { ArrowLeft, Clock, Calendar, User, ArrowRight, CheckCircle2, Sparkles, MessageSquare } from "lucide-react";
import TrustStrip from "@/components/sections/TrustStrip";
import CtaBanner from "@/components/sections/CtaBanner";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found | Niora Birth Clinic" };
  return {
    title: `${article.title} | Niora Birth Clinic Blog`,
    description: article.excerpt,
  };
}

export async function generateStaticParams() {
  return articles.map((art) => ({ slug: art.slug }));
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-cream-bg">
      {/* 1. Header & Breadcrumb */}
      <article className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-mauve-rose hover:text-plum-deep transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to All Guidance & Articles
          </Link>

          {/* Meta Pill & Info */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-mauve-rose px-3.5 py-1.5 rounded-full bg-white border border-mauve-rose/20">
              {article.category}
            </span>
            <span className="text-xs text-charcoal-text/60 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </span>
            <span className="text-xs text-charcoal-text/60 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {article.date}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-plum-deep font-bold leading-tight mb-6">
            {article.title}
          </h1>

          {/* Author Badge */}
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-cream-bg shadow-sm mb-8">
            <div className="w-10 h-10 rounded-full bg-mauve-rose/15 text-mauve-rose flex items-center justify-center font-bold">
              <User className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-plum-deep">{article.author}</p>
              <p className="text-xs text-charcoal-text/70">{article.authorRole}</p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[320px] sm:h-[440px] w-full rounded-[2.5rem] overflow-hidden mb-12 shadow-xl border-4 border-white">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Body */}
          <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-sm border border-cream-bg">
            {/* Intro */}
            <p className="text-base sm:text-lg text-charcoal-text/85 leading-relaxed mb-8 font-medium border-l-4 border-mauve-rose pl-6 italic">
              {article.content.intro}
            </p>

            {/* Content Sections */}
            <div className="space-y-10">
              {article.content.sections.map((sec, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="font-serif text-2xl text-plum-deep font-bold">
                    {sec.heading}
                  </h2>
                  <p className="text-sm sm:text-base text-charcoal-text/80 leading-relaxed">
                    {sec.body}
                  </p>

                  {sec.bulletPoints && (
                    <ul className="space-y-3 py-2">
                      {sec.bulletPoints.map((bp, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-charcoal-text/85">
                          <CheckCircle2 className="w-4 h-4 text-success-sage shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.callout && (
                    <div className="p-5 rounded-2xl bg-cream-bg border border-mauve-rose/20 text-plum-deep text-sm font-semibold flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-mauve-rose shrink-0 mt-0.5" />
                      <span>{sec.callout}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Summary & WhatsApp Action */}
            <div className="mt-12 pt-8 border-t border-cream-bg">
              <div className="p-6 rounded-2xl bg-plum-deep text-white flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-serif text-xl font-bold mb-1">Have Questions After Reading?</h3>
                  <p className="text-xs text-white/80">{article.content.summary}</p>
                </div>
                <Link
                  href={`https://wa.me/917994892509?text=Hi%20Niora%20Clinic,%20I'm%20reading%20the%20article%20'${encodeURIComponent(
                    article.title
                  )}'%20and%20have%20a%20question.`}
                  target="_blank"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-mauve-rose to-blush-pink text-plum-deep font-bold text-xs shrink-0 flex items-center gap-2 hover:opacity-95 transition-opacity"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Ask Clinical Team on WhatsApp</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* 2. Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-plum-deep mb-8">Related Guides & Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <div key={rel.slug} className="p-6 rounded-3xl bg-cream-bg/50 border border-cream-bg flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-mauve-rose px-3 py-1 rounded-full bg-white border border-mauve-rose/20 inline-block mb-3">
                      {rel.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-plum-deep mb-2">{rel.title}</h3>
                    <p className="text-xs text-charcoal-text/75 leading-relaxed mb-4 line-clamp-2">{rel.excerpt}</p>
                  </div>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="text-xs font-semibold text-mauve-rose hover:text-plum-deep transition-colors flex items-center gap-1"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <TrustStrip />
      <CtaBanner />
    </div>
  );
}
