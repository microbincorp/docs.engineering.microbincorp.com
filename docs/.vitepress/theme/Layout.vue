<script setup>
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
const route = useRoute()
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-bottom>
      <footer style="padding-top:0px;color: var(--vp-c-text-2);">
        <div style="border-top: 1px solid var(--vp-c-divider);padding:20px 20px;">
          <div class="content-width" style="display:flex">
            <div>
              <p style="color:white;font-weight:bold;">
                MicroBin
              </p>
              <div>
                <p>Office Location</p>
              </div>
              <p style="font-size:0.8rem;max-width:400px;">
                RMZ, MILLENIA BUSINESS PARK, Campus 1A,
                NO.143, DR.M.G.R. Road, (North Veeranam Salai),
                Perungudi,Sholinganallur, Chennai-600096
              </p>
            </div>
          </div>
        </div>
        <div
          style="margin-top:30px;border-top: 1px solid var(--vp-c-divider); font-size: 0.875rem; color: var(--vp-c-text-2);">
          <div   class="content-width" style="text-align: center;display:flex;justify-content:space-between;width:100%;  ">
            <div>© 2025 MicroBin Docs</div>
          <div>
            <a href="https://twitter.com/yourhandle" target="_blank">Twitter</a> |
            <a href="https://github.com/yourrepo" target="_blank">GitHub</a> |
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
          </div>
        </div>
      </footer>

    </template>
  </DefaultTheme.Layout>
</template>
<style scoped>
.content-width{
  max-width:1200px;
  margin:0px auto;
}
.custom-footer {
  border-top: 1px solid var(--vp-c-divider);
  padding: 2rem 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-bg);
}

.footer-links {
  margin-top: 0.5rem;
}

.footer-links a {
  margin: 0 0.5rem;
  color: var(--vp-c-brand);
  text-decoration: none;
}
</style>
