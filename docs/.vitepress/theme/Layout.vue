<script setup>
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
const route = useRoute()
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-bottom>
      <footer v-if="route.path === '/'" style="padding-top:0px;color: var(--vp-c-text-2);">
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
            <a href="https://www.linkedin.com/company/microbincorp" target="_blank">LinkedIn</a> |
            <a href="https://github.com/microbincorp" target="_blank">GitHub</a> |
            <a href="https://www.microbin.io/privacy-policy" target="_blank">Privacy Policy</a>
          </div>
          </div>
        </div>
      </footer>
    </template>
  </DefaultTheme.Layout>
</template>
<style scoped>
.content-width{
  max-width:calc(var(--vp-layout-max-width) - 64px);
  margin:0px auto;
}
</style>
