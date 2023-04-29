 <template>
     <div class="wrapper">
         <header class="box header">
             <slot name="header"></slot>
         </header>
         <aside class="box sidebar">
             <slot name="sidebar"></slot>
         </aside>
         <section class="box content">
             <slot></slot>
         </section>
         <footer class="box footer">
             <slot name="footer"></slot>
         </footer>
     </div>
 </template>
 <script>
 export default {
     name : "Layout"
 }
 </script>
 <style scoped>
 body { margin: 40px; }
 .sidebar { grid-area: sidebar; }
 .content { grid-area: content; position: relative; }
 .header { grid-area: header; }
 .footer { grid-area: footer; }
 .wrapper {
     display: grid;
     grid-gap: 5px;
     grid-template-rows : 100px 1fr 100px;
     grid-template-columns: 1fr 200px;
     grid-template-areas:
         "header  header"
         "content sidebar"
         "footer  footer";
     background-color: #fff;
     color: #444;
 }
 .box { background-color: #ddd; color: #444; 
   border-radius: 5px; padding: 10px; font-size: 100%; }
 </style>