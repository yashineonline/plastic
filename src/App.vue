<script setup>
import { computed, ref } from 'vue'
import { freeWatch, organizations, plasticCatalog, projectNotes, scienceIdeas } from './data/resources'

const selected = ref(plasticCatalog[0].code)
const quantity = ref(10)
const cleanliness = ref('clean')

const item = computed(() => plasticCatalog.find(p => p.code === selected.value) || plasticCatalog[0])
const valueMessage = computed(() => {
  const cleanFactor = cleanliness.value === 'clean' ? 1 : cleanliness.value === 'mixed' ? 0.65 : 0.35
  const roughPoints = Math.max(1, Math.round(quantity.value * cleanFactor))
  return {
    points: roughPoints,
    text: cleanliness.value === 'dirty'
      ? 'This material may still be useful, but contamination can sharply reduce practical recycling value.'
      : 'Keeping plastics sorted and clean can make them more reusable, recyclable, and economically attractive.'
  }
})

const sections = [
  { id: 'value', label: 'Plastic value' },
  { id: 'science', label: 'Citizen science' },
  { id: 'learn', label: 'Learn & watch' },
  { id: 'action', label: 'Take action' },
]
</script>

<template>
  <div data-theme="plasticplanet" class="min-h-screen bg-gradient-to-b from-base-200 to-base-100">
    <header class="navbar sticky top-0 z-20 border-b border-base-300 bg-base-100/90 backdrop-blur">
      <div class="navbar-start">
        <a class="btn btn-ghost text-lg font-bold">Plastic Planet SA</a>
      </div>
      <div class="navbar-center hidden md:flex">
        <ul class="menu menu-horizontal gap-2 px-1">
          <li v-for="section in sections" :key="section.id"><a :href="`#${section.id}`">{{ section.label }}</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <a href="#action" class="btn btn-primary btn-sm">Start here</a>
      </div>
    </header>

    <main class="mx-auto max-w-7xl px-4 py-8 md:px-8">
      <section class="hero rounded-3xl bg-base-100 shadow-xl border border-base-300">
        <div class="hero-content grid gap-8 py-10 lg:grid-cols-2">
          <div>
            <div class="badge badge-accent mb-4">PWA • Vue 3 • Tailwind • daisyUI</div>
            <h1 class="text-4xl font-extrabold leading-tight md:text-5xl">Turn plastic from “waste” into <span class="text-primary">value, evidence, and action</span>.</h1>
            <p class="mt-4 text-lg leading-8 text-slate-700">
              A lightweight, accessible concept app for South Africa and the Global South: learn the science,
              estimate practical value, support cleanups, and imagine citizen-generated data that helps communities,
              schools, municipalities, and researchers.
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <a href="#value" class="btn btn-primary">Explore plastic value</a>
              <a href="#science" class="btn btn-outline">See science features</a>
            </div>
            <div class="mt-6 grid gap-3 sm:grid-cols-2">
              <div class="card-soft p-4">
                <div class="text-sm uppercase tracking-wide text-primary">Meeting context</div>
                <div class="mt-2 font-semibold">{{ projectNotes.meeting1 }}</div>
                <div class="text-sm">{{ projectNotes.meeting2 }}</div>
              </div>
              <div class="card-soft p-4">
                <div class="text-sm uppercase tracking-wide text-primary">Design keywords</div>
                <div class="mt-2 flex flex-wrap gap-2">
                  <span v-for="tag in projectNotes.focus" :key="tag" class="badge badge-outline">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="grid gap-4">
            <div class="card-soft p-5">
              <h2 class="text-2xl font-bold">Why someone would use it</h2>
              <ul class="mt-3 space-y-2 list-disc pl-5 text-slate-700">
                <li>Know what a plastic item is and why it should be sorted.</li>
                <li>See that material can have practical value, not only disposal cost.</li>
                <li>Support local cleanups, schools, and awareness campaigns.</li>
                <li>Contribute simple observations that can later power open science and policy.</li>
              </ul>
            </div>
            <div class="stats stats-vertical lg:stats-horizontal shadow border border-base-300 bg-base-100">
              <div class="stat">
                <div class="stat-title">Mode 1</div>
                <div class="stat-value text-primary text-2xl">Public info</div>
                <div class="stat-desc">Fast, simple, mobile friendly</div>
              </div>
              <div class="stat">
                <div class="stat-title">Mode 2</div>
                <div class="stat-value text-secondary text-2xl">Value check</div>
                <div class="stat-desc">Type, use, sorting guidance</div>
              </div>
              <div class="stat">
                <div class="stat-title">Mode 3</div>
                <div class="stat-value text-accent text-2xl">Citizen science</div>
                <div class="stat-desc">Photos, hotspots, local evidence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="value" class="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="card-soft p-6">
          <h2 class="text-3xl font-bold">Plastic value explorer</h2>
          <p class="mt-2 text-slate-700">A simple prototype showing how one plastic item can become a learning and decision tool.</p>

          <div class="mt-6 grid gap-4 md:grid-cols-2">
            <label class="form-control">
              <div class="label"><span class="label-text font-semibold">Plastic type</span></div>
              <select v-model="selected" class="select select-bordered">
                <option v-for="p in plasticCatalog" :key="p.code" :value="p.code">{{ p.code }}</option>
              </select>
            </label>

            <label class="form-control">
              <div class="label"><span class="label-text font-semibold">Condition</span></div>
              <select v-model="cleanliness" class="select select-bordered">
                <option value="clean">Clean and sorted</option>
                <option value="mixed">Mixed household waste</option>
                <option value="dirty">Dirty / contaminated</option>
              </select>
            </label>
          </div>

          <label class="form-control mt-4">
            <div class="label">
              <span class="label-text font-semibold">Estimated number of items</span>
              <span class="label-text-alt">{{ quantity }}</span>
            </div>
            <input v-model="quantity" type="range" min="1" max="50" class="range range-primary" />
          </label>

          <div class="mt-6 rounded-2xl bg-base-200 p-5">
            <h3 class="text-xl font-bold">{{ item.code }}</h3>
            <p class="mt-2"><span class="font-semibold">Common examples:</span> {{ item.common }}</p>
            <p class="mt-2"><span class="font-semibold">Practical value idea:</span> {{ item.valueHint }}</p>
            <p class="mt-2"><span class="font-semibold">Caution:</span> {{ item.caution }}</p>
            <div class="mt-4">
              <div class="font-semibold">Possible uses</div>
              <div class="mt-2 flex flex-wrap gap-2">
                <span v-for="idea in item.ideas" :key="idea" class="badge badge-outline badge-lg">{{ idea }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="grid gap-6">
          <div class="card-soft p-6">
            <h3 class="text-2xl font-bold">Quick material score</h3>
            <div class="mt-4 radial-progress text-primary" :style="`--value:${Math.min(valueMessage.points * 2, 100)}; --size:9rem;`" role="progressbar">
              {{ valueMessage.points }} pts
            </div>
            <p class="mt-4 text-slate-700">{{ valueMessage.text }}</p>
            <div class="alert alert-info mt-4">
              <span>This is an educational prototype score, not a real buy-back price engine. Later versions could connect to local collection APIs, municipal rules, or partner recyclers.</span>
            </div>
          </div>

          <div class="card-soft p-6">
            <h3 class="text-2xl font-bold">Future feature ideas</h3>
            <ul class="mt-3 space-y-2 list-disc pl-5 text-slate-700">
              <li>Scan a recycling code or upload a label photo.</li>
              <li>Estimate local value ranges in rand when trusted partners are available.</li>
              <li>Suggest how to separate caps, labels, films, and mixed materials.</li>
              <li>Show nearby drop-off points or community collection partners.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="science" class="mt-12 grid gap-6 lg:grid-cols-2">
        <div class="card-soft p-6">
          <h2 class="text-3xl font-bold">Citizen science for plastic pollution</h2>
          <p class="mt-3 text-slate-700">
            The app can go beyond awareness. It can help communities create structured observations that are useful for science,
            environmental education, and local intervention.
          </p>
          <div class="mt-5 space-y-3">
            <div v-for="point in scienceIdeas" :key="point" class="flex gap-3 rounded-2xl border border-base-300 p-3">
              <div class="mt-1 h-3 w-3 rounded-full bg-primary"></div>
              <p>{{ point }}</p>
            </div>
          </div>
        </div>

        <div class="card-soft p-6">
          <h3 class="text-2xl font-bold">Prototype data flow</h3>
          <div class="mockup-code mt-4 text-sm">
            <pre><code>photo or manual entry</code></pre>
            <pre><code>→ material guess + user correction</code></pre>
            <pre><code>→ rough quantity + location + context</code></pre>
            <pre><code>→ local dashboard / school report / NGO export</code></pre>
            <pre><code>→ evidence for cleanup planning and research</code></pre>
          </div>
          <div class="mt-5 alert alert-warning">
            <span>A future research version could connect plastic observations with climate, land use, stormwater, biodiversity, heavy metals, or pesticide exposure questions.</span>
          </div>
        </div>
      </section>

      <section id="learn" class="mt-12 grid gap-6 lg:grid-cols-2">
        <div class="card-soft p-6">
          <h2 class="text-3xl font-bold">Free documentaries and videos</h2>
          <div class="mt-4 space-y-3">
            <a v-for="item in freeWatch" :key="item.title" :href="item.url" target="_blank" rel="noreferrer" class="block rounded-2xl border border-base-300 p-4 transition hover:border-primary hover:bg-base-200">
              <div class="font-semibold">{{ item.title }}</div>
              <div class="text-sm text-slate-600">{{ item.type }}</div>
            </a>
          </div>
        </div>

        <div class="card-soft p-6">
          <h2 class="text-3xl font-bold">Useful organizations and websites</h2>
          <div class="mt-4 grid gap-3">
            <a v-for="org in organizations" :key="org.name" :href="org.url" target="_blank" rel="noreferrer" class="rounded-2xl border border-base-300 p-4 transition hover:border-secondary hover:bg-base-200">
              <div class="font-semibold">{{ org.name }}</div>
              <div class="text-sm text-slate-600">{{ org.note }}</div>
            </a>
          </div>
        </div>
      </section>

      <section id="action" class="mt-12 mb-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div class="card-soft p-6">
          <h2 class="text-3xl font-bold">Suggested project direction</h2>
          <div class="mt-4 space-y-4 text-slate-700">
            <p><span class="font-semibold">Phase 1:</span> public-facing information app with value explorer, learning resources, and school-friendly design.</p>
            <p><span class="font-semibold">Phase 2:</span> optional citizen-science form for uploads, hotspot mapping, and downloadable summaries.</p>
            <p><span class="font-semibold">Phase 3:</span> research and municipal partnerships, open API integrations, and local value-chain collaboration.</p>
          </div>
        </div>

        <div class="card-soft p-6">
          <h2 class="text-3xl font-bold">Good repo naming direction</h2>
          <div class="mt-4 space-y-3 text-slate-700">
            <p><span class="font-semibold">GitHub account/org suggestion:</span> <code>plastic-planet-africa</code> or <code>plastic-planet-global-south</code></p>
            <p><span class="font-semibold">Repo suggestion:</span> <code>plastic-planet-sa-pwa</code></p>
            <p><span class="font-semibold">Alternative repo names:</span> <code>plastic-value-sa</code>, <code>plastic-citizen-science</code>, <code>ecosolution-plastics</code></p>
            <div class="alert mt-3">
              <span>These are naming suggestions based on clarity and mission fit. Actual GitHub availability should be checked when you create the account or repository.</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
