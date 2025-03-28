<script setup>
import { ref, onMounted } from 'vue'
import ProjectCard from './components/ProjectCard.vue'
import BlogCard from './components/BlogCard.vue'
import { getMediumArticles } from './services/medium'

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const projects = [
  {
    title: 'KUZ - 24H DU CODE 2025 : Sujet Le Mans School Of AI',
    description: "Ce projet a été créé dans le cadre du hackathon Les 24H du code 2025. Nous avons choisi le sujet proposé par Le Mans School of AI. L'objectif était de développer un assistant IA intelligent pour l'hôtel California du Mans, capable d'interagir avec les clients de manière naturelle et efficace.",
    imageUrl: '/projects/kuz.png',
    demoUrl: 'https://www.youtube.com/watch?v=IAd7BZcSHbs',
    sourceUrl: 'https://github.com/roseratugo/KUZ-24HDUCODE2025'
  },
  {
    title: 'Générateur de planette par IA',
    description: "Un générateur de planètes 3D low-poly propulsé par l'IA. Créez des mondes uniques à partir de simples descriptions textuelles !",
    imageUrl: '/projects/planetgenerator.png',
    demoUrl: 'https://planet-generator-lovat.vercel.app/',
    sourceUrl: 'https://github.com/roseratugo/planet-generator'
  },
  {
    title: 'Now Playing Deezer',
    description: "Now Playing Deezer est une application qui affiche la chanson en cours de lecture depuis Deezer sur votre flux de streaming. Elle utilise playerctl pour récupérer les informations sur les chansons et l'API Spotify pour récupérer les pochettes d'album.",
    imageUrl: '/projects/nowplayingdeezer.png',
    sourceUrl: 'https://github.com/roseratugo/nowPlayingDeezer'
  },
  {
    title: 'Dwell',
    description: "Dwell est une application web innovante qui simplifie la recherche de logement en location longue durée. Elle propose une interface intuitive pour les locataires et les propriétaires, avec un algorithme avancé de filtrage et de matching. L'application offre une expérience sécurisée et personnalisée pour trouver le logement idéal.",
    imageUrl: '/projects/dwell.png',
    demoUrl: 'https://simulateur.dwellapp.fr/',
  },
  {
    title: 'Pixel Podcast',
    description: "Pixel Podcast est un podcast créé par des étudiants en alternance passionnés de tech. Il explore le développement web, le design graphique, les systèmes réseaux et l'entrepreneuriat à travers des expériences réelles et des témoignages d'apprenants. Disponible sur Spotify, Apple Podcasts, Deezer et Amazon Music.",
    imageUrl: '/projects/pixelpodcast.png',
    demoUrl: 'https://www.pixelpodcast.fr/',
  },
]

const blogPosts = ref([])
const loading = ref(false)
const error = ref(null)

onMounted(async () => {
  loading.value = true
  try {
    blogPosts.value = await getMediumArticles()
  } catch (e) {
    error.value = "Impossible de charger les articles"
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="app">
    <header>
      <nav>
        <div class="nav-content">
          <h1>Ugo ROSERAT 👨‍💻</h1>
          <div class="nav-links">
            <a href="#" @click.prevent="scrollToSection('projets')">Projets</a>
            <a href="#" @click.prevent="scrollToSection('blog')">Blog</a>
            <a href="https://github.com/roseratugo" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/ugo-roserat/" target="_blank">LinkedIn</a>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <section id="about" class="about-section">
        <div class="about-content">
          <div class="about-image">
            <img src="/images/profile.jpeg" alt="Ugo Roserat">
          </div>
          <div class="about-text">
            <h2>Hey, je suis Ugo ROSERAT 👋</h2>
            <p class="subtitle">Développeur Fullstack & Designer</p>
            <p class="description">
              Passionné par le développement web et le design, je crée des expériences numériques 
              innovantes et intuitives. Spécialisé dans le développement fullstack, je combine 
              créativité et expertise technique pour donner vie à des projets uniques.
            </p>
          </div>
        </div>
      </section>

      <section id="projets">
        <h2>Mes Projets ✨</h2>
        <div class="projects-grid">
          <ProjectCard
            v-for="project in projects"
            :key="project.title"
            v-bind="project"
          />
        </div>
      </section>

      <section id="blog">
        <h2>Blog 📝</h2>
        <div v-if="loading" class="loading">
          Chargement des articles...
        </div>
        <div v-else-if="error" class="error">
          {{ error }}
        </div>
        <div v-else class="blog-grid">
          <BlogCard
            v-for="post in blogPosts"
            :key="post.link"
            v-bind="post"
          />
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 Ugo ROSERAT. Fait avec ❤️ en France</p>
    </footer>
  </div>
</template>

<style>
:root {
  --bg-color: #ffffff;
  --text-color: #1a1a1a;
  --accent-color: #007AFF;
  --secondary-color: #6B7280;
  --border-color: #E5E7EB;
}

.app {
  min-height: 100vh;
  color: var(--text-color);
  position: relative;
  overflow-x: hidden;
}

.app::before,
.app::after {
  content: '';
  position: fixed;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.1;
  z-index: -1;
}

.app::before {
  background: linear-gradient(45deg, #007AFF, #00B4DB);
  top: -200px;
  left: -200px;
}

.app::after {
  background: linear-gradient(45deg, #00B4DB, #007AFF);
  bottom: -200px;
  right: -200px;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  z-index: 100;
}

nav {
  padding: 1rem;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-size: 1.25rem;
  font-weight: 600;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--accent-color);
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 1rem 2rem;
}

section {
  margin-bottom: 4rem;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 380px);
  gap: 2rem;
  justify-content: center;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
  color: var(--secondary-color);
}

.error {
  color: #EF4444;
}

footer {
  text-align: center;
  padding: 2rem;
  color: var(--secondary-color);
  border-top: 1px solid var(--border-color);
}

.about-section {
  padding: 4rem 0;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.about-image {
  position: relative;
  width: 100%;
  padding-top: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.about-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.about-image:hover img {
  transform: scale(1.05);
}

.about-text {
  padding-right: 2rem;
}

.about-text h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.about-text .subtitle {
  font-size: 1.25rem;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.about-text .description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--secondary-color);
}

@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .nav-links {
    gap: 1rem;
  }

  main {
    padding-top: 8rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .blog-grid {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
  }

  .about-image {
    max-width: 300px;
    margin: 0 auto;
  }

  .about-text {
    padding-right: 0;
    text-align: center;
  }

  .about-text h2 {
    font-size: 2rem;
  }
}
</style>
