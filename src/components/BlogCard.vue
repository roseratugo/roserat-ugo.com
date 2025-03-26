<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  thumbnail: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    required: true
  },
  publishDate: {
    type: String,
    required: true
  },
  readingTime: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <a :href="link" target="_blank" class="blog-card">
    <article>
      <div class="image-container">
        <img v-if="thumbnail" :src="thumbnail" :alt="title">
        <div class="overlay">
          <span class="read-more">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Lire l'article
          </span>
        </div>
      </div>
      <div class="content">
        <h3>{{ title }}</h3>
        <p>{{ subtitle }}</p>
        <div class="metadata">
          <time>{{ publishDate }}</time>
          <span class="separator">·</span>
          <span>{{ readingTime }} min de lecture</span>
        </div>
      </div>
    </article>
  </a>
</template>

<style scoped>
.blog-card {
  display: block;
  text-decoration: none;
  color: inherit;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s ease;
  width: 100%;
  max-width: 380px;
}

.blog-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.image-container {
  position: relative;
  padding-top: 56.25%;
  background: #f3f4f6;
  overflow: hidden;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.blog-card:hover .overlay {
  opacity: 1;
}

.blog-card:hover .image-container img {
  transform: scale(1.05);
}

.read-more {
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.read-more svg {
  width: 20px;
  height: 20px;
}

.content {
  padding: 1.5rem;
}

h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text-color);
}

p {
  color: var(--secondary-color);
  line-height: 1.5;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.metadata {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--secondary-color);
  font-size: 0.875rem;
}

.separator {
  color: var(--border-color);
}
</style> 