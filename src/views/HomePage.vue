<template>
  <div class="row">
    <!-- Columna para documentos -->
    <div class="col-md-10 border">
      <div class="row" id="pdf-preview" ref="sortableContainer">
        <div class="col-12 col-md-8 col-lg-8 mx-auto mt-2" v-if="pdfPages.length === 0">
          <div class="card shadow-lg rounded">
            <div class="card-body">
              <h3 class="card-title text-center mb-4"><strong>¿Por qué <span class="text-danger">PDFwoow</span>?</strong></h3>
              <p class="card-text">
                En <strong class="text-danger">PDFwoow</strong>, nos comprometemos con tu privacidad y seguridad. A diferencia de otros proyectos <i class="bi bi-heart text-danger"></i> no almacenamos ni procesamos los archivos que subes.
                Queremos ofrecerte una herramienta totalmente libre de terceros, <strong>Open Source</strong> y completamente transparente.
              </p>
              <p class="text-center">
                <div class="alert alert-light" role="alert">
                  Tu información está segura, y el proceso lo hace tu dispositivo.
                </div>
              </p>
              <p class="card-text">
                Nuestra misión es darte una herramienta accesible, sencilla y libre de cualquier tipo de monitoreo o recopilación de datos. Tu confianza es nuestra prioridad, y creemos en un internet más libre, sin el control de terceros sobre tus archivos.
              </p>
              <!-- <div class="d-flex justify-content-center">
                <button class="btn btn-primary" @click="moreInfo">Más Información</button>
              </div> -->
              <div class="container">
                <div class="row g-4">
                  <!-- Unir PDF -->
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="card h-100 shadow-sm">
                      <div class="card-body text-center">
                        <i class="bi bi-plus-square-fill display-4 text-danger"></i>
                        <h5 class="card-title mt-3">Unir PDF</h5>
                        <small class="card-text">Combina varios PDFs en uno solo.</small>
                      </div>
                    </div>
                  </div>

                  <!-- Dividir PDF -->
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="card h-100 shadow-sm">
                      <div class="card-body text-center">
                        <i class="bi bi-scissors display-4 text-primary"></i>
                        <h5 class="card-title mt-3">Dividir PDF</h5>
                        <small class="card-text">Separa páginas específicas en archivos nuevos.</small>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="card h-100 shadow-sm">
                      <div class="card-body text-center">
                        <i class="bi bi-trash display-4 text-danger"></i>
                        <h5 class="card-title mt-3">Eliminar PDF</h5>
                        <small class="card-text">Selecciona la página y eliminala facilmente.</small>
                      </div>
                    </div>
                  </div>


                  <h5>Próximamente</h5>
                  <!-- Comprimir PDF -->
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="card h-100 shadow-sm">
                      <div class="card-body text-center">
                        <i class="bi bi-arrows-collapse display-4 text-success"></i>
                        <h5 class="card-title mt-3">Comprimir PDF</h5>
                        <small class="card-text">Reduce el tamaño de tus PDFs sin perder calidad.</small>
                      </div>
                    </div>
                  </div>

                  <!-- PDF a Word -->
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="card h-100 shadow-sm">
                      <div class="card-body text-center">
                        <i class="bi bi-file-earmark-word-fill display-4 text-primary"></i>
                        <h5 class="card-title mt-3">PDF a Word</h5>
                        <small class="card-text">Convierte tus PDFs a documentos Word editables.</small>
                      </div>
                    </div>
                  </div>

                  <!-- PDF a PowerPoint -->
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="card h-100 shadow-sm">
                      <div class="card-body text-center">
                        <i class="bi bi-file-earmark-ppt-fill display-4 text-warning"></i>
                        <h5 class="card-title mt-3">PDF a PowerPoint</h5>
                        <small class="card-text">Transforma tu PDF en una presentación editable.</small>
                      </div>
                    </div>
                  </div>

                  <!-- PDF a Excel -->
                  <!-- <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="card h-100 shadow-sm">
                      <div class="card-body text-center">
                        <i class="bi bi-file-earmark-excel-fill display-4 text-success"></i>
                        <h5 class="card-title mt-3">PDF a Excel</h5>
                        <small class="card-text">Exporta datos de PDF a hojas de cálculo Excel.</small>
                      </div>
                    </div>
                  </div> -->

                  <!-- Word a PDF -->
                  <!-- <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="card h-100 shadow-sm">
                      <div class="card-body text-center">
                        <i class="bi bi-file-word-fill display-4 text-primary"></i>
                        <h5 class="card-title mt-3">Word a PDF</h5>
                        <small class="card-text">Convierte documentos de Word a PDF rápidamente.</small>
                      </div>
                    </div>
                  </div> -->

                  <!-- PowerPoint a PDF -->
                  <!-- <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="card h-100 shadow-sm">
                      <div class="card-body text-center">
                        <i class="bi bi-file-ppt-fill display-4 text-danger"></i>
                        <h5 class="card-title mt-3">PowerPoint a PDF</h5>
                        <small class="card-text">Convierte tus presentaciones en PDF.</small>
                      </div>
                    </div>
                  </div> -->

                  <!-- Excel a PDF -->
                  <!-- <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="card h-100 shadow-sm">
                      <div class="card-body text-center">
                        <i class="bi bi-file-excel-fill display-4 text-success"></i>
                        <h5 class="card-title mt-3">Excel a PDF</h5>
                        <small class="card-text">Transforma hojas de cálculo en archivos PDF.</small>
                      </div>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div
          class="col-3 col-md-2"
          v-for="(page, index) in pdfPages"
          :key="page.order"
          :data-order="index"
          :class="['page-container', 'sortable-item', { 'red-trash': page.deleted }]"
          :style="{ order: page.order }"
        >
          <div class="card card-hover text-left border-pill mb-1">
            <div :class="['card-body', { 'bg-danger': page.deleted }]">
              <div class="position-relative text-center">
                <!-- Mostrar la miniatura de la página -->
                <img :src="page.url" :alt="'Página ' + (index + 1)" @click="viewPage(page, index)" />
                <!-- Botón para eliminar -->
                <button :class="['trash-btn', { 'bg-danger': !page.deleted }, { 'bg-white': page.deleted }]" @click="toggleTrash(index)">
                  <i v-if="!page.deleted" class="bi bi-trash text-white"></i>
                  <i v-else class="bi bi-x-circle text-danger"></i>
                </button>
              </div>

              <div class="text-center mt-2">
                <small class="text-sm text-muted my-0">Página {{ page.order }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Panel fijo a la derecha -->
    <div class="col-md-2 top-fixed bg-white" style="z-index: 10; position: sticky;">
      <div class="text-center my-2">
        <img src="../assets/pdfwoow.svg" class="img img-responsive" width="80px" alt="">
      </div>

      <div class="card shadow-sm card-hover rounded" @click="addPdf">
        <div class="card-body text-center">
          <i class="bi bi-plus display-4 text-primary"></i>
          <h5 class="card-title mt-3">Subir PDF</h5>
          <small class="card-text">Añadir más archivos.</small>
        </div>
      </div>
   
      <div class="my-3">

        <label for="formatSelect">Formato de PDF:</label>
        <select id="formatSelect" v-model="selectedFormat">
          <option value="a4">Original (A4)</option>
          <option value="letter">Carta (Letter)</option>
          <option value="legal">Oficio (Legal)</option>
        </select>
      </div>

      <div class="card bg-danger text-white shadow-sm card-hover rounded mt-3"  @click="downloadPdf">
        <div class="card-body text-center">
          <i class="bi bi-plus display-4 text-white"></i>
          <h5 class="card-title">Descargar PDF</h5>
          <!-- <small class="card-text">Añadir más archivos.</small> -->
        </div>
      </div>
    </div>
  </div>

  <!-- Modal para visualizar página en detalle -->
  <div v-if="isModalVisible" class="modal fade show" tabindex="-1" aria-labelledby="page-modal-label" aria-hidden="false" style="display: block;">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="page-modal-label">Vista de Página</h5>
          <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img v-if="selectedPage" :src="selectedPage.url" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import { jsPDF } from "jspdf";
import * as pdfjsLib from "pdfjs-dist";
import Sortable from 'sortablejs';
// Configuración del workerSrc para PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs`;

// Variables reactivas
const pdfPages = ref([]); // Array para almacenar las páginas del PDF
const selectedPage = ref(null); // Página seleccionada para mostrar en el modal
const selectedFormat = ref('a4'); // Formato seleccionado para la descarga
const isModalVisible = ref(false); // Estado del modal

const initializeSortable = () => {
  const sortableContainer = document.getElementById("pdf-preview");

  if (sortableContainer) {
    new Sortable(sortableContainer, {
      handle: '.page-container',  // Esto asegura que el usuario pueda arrastrar desde la miniatura de cada página.
      animation: 150,  // Animación de 150ms para una transición suave
      onStart(evt) {
        // Opcional: Manejar el evento cuando empieza el drag, si es necesario
      },
      onEnd(evt) {
        // Manejar el evento cuando el drag termina
        const oldIndex = evt.oldIndex;  // Índice original
        const newIndex = evt.newIndex;  // Nuevo índice después de mover el elemento

        if (oldIndex !== newIndex) {
          // Actualizar el orden de las páginas
          const movedPage = pdfPages.value[oldIndex];
          pdfPages.value.splice(oldIndex, 1);  // Eliminar la página de su posición original
          pdfPages.value.splice(newIndex, 0, movedPage);  // Insertar la página en la nueva posición

          // Actualizar el orden de la propiedad `order` de las páginas
          pdfPages.value.forEach((page, index) => {
            page.order = index + 1;  // Ajustar el orden de las páginas basado en el nuevo índice
          });
        }
      }
    });
  } else {
    console.error("Elemento 'pdf-preview' no encontrado en el DOM.");
  }
};


// Función para agregar más PDFs
const addPdf = () => {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "application/pdf";
  fileInput.multiple = true;
  fileInput.addEventListener("change", handleFileUpload);
  fileInput.click();
};

// Función para manejar la carga de los archivos PDF
const handleFileUpload = (event) => {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    if (files[i].type === "application/pdf") {
      const reader = new FileReader();
      reader.onload = () => {
        const pdfData = new Uint8Array(reader.result);
        pdfjsLib.getDocument(pdfData).promise.then(extractPagesFromPDF);
      };
      reader.readAsArrayBuffer(files[i]);
    }
  }
};

// Función para extraer las páginas del PDF y mostrar las miniaturas
const extractPagesFromPDF = (pdf) => {
  const numPages = pdf.numPages;
  for (let i = 1; i <= numPages; i++) {
    pdf.getPage(i).then((page) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      const scale = 1.5; // Escala para la miniatura
      const viewport = page.getViewport({ scale: scale });
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      page
        .render({
          canvasContext: context,
          viewport: viewport,
        })
        .promise.then(() => {
          const imageUrl = canvas.toDataURL();
          const orientation = canvas.width > canvas.height ? "landscape" : "portrait"; // Detectar orientación
          pdfPages.value.push({
            url: imageUrl,
            deleted: false,
            order: pdfPages.value.length + 1, // Usamos la longitud del array para el orden
            orientation,
            pdfPage: page,
          });
        });
    });
  }
}

// Función para ver página en el modal más grande
const viewPage = (page, index) => {
  selectedPage.value = page;
  isModalVisible.value = true;
}

const closeModal = () => {
  isModalVisible.value = false;
  selectedPage.value = null;
}

// Función para alternar el estado de eliminación de una página
const toggleTrash = (index) => {
  const page = pdfPages.value[index];
  page.deleted = !page.deleted;
}

// Función para descargar el PDF con las páginas modificadas
const downloadPdf = () => {
  if (pdfPages.value.length === 0) return;

  // Definimos tamaño según el formato
  let pageSize = "a4"; // Default
  if (selectedFormat.value === "letter") {
    pageSize = "letter";
  } else if (selectedFormat.value === "legal") {
    pageSize = "legal";
  }

  const firstPage = pdfPages.value.find(page => !page.deleted);
  const orientation = firstPage?.orientation === "landscape" ? "landscape" : "portrait";

  // Crear el primer documento
  const doc = new jsPDF({
    orientation,
    unit: "mm",
    format: pageSize,
  });

  let isFirstPage = true;

  pdfPages.value.forEach((page) => {
    if (!page.deleted) {
      if (!isFirstPage) {
        const pageOrientation = page.orientation === "landscape" ? "landscape" : "portrait";
        doc.addPage(pageSize, pageOrientation);
      } else {
        isFirstPage = false;
      }

      // Insertar imagen
      const { internal } = doc;
      const pageWidth = internal.pageSize.getWidth();
      const pageHeight = internal.pageSize.getHeight();

      doc.addImage(page.url, "PNG", 0, 0, pageWidth, pageHeight);
    }
  });

  doc.save("modified.pdf");
};

onMounted(() => {
  initializeSortable();
});

// Observa los cambios en pdfPages y vuelve a inicializar Sortable cuando se agregan nuevas páginas
watch(pdfPages, (newPages, oldPages) => {
  if (newPages.length > oldPages.length) {
    // Solo inicializa si se han agregado páginas nuevas
    initializeSortable();
  }
});
</script>
<style scoped>
.page-container {
  position: relative;
  margin: 10px;
  cursor: pointer;
}
.page-container img {
  width: 100px;
  height: auto;
}
.trash-btn {
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(255, 0, 0, 0.6);
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 20%;
}
.page-container.red-trash .trash-btn {
  background-color: red;
}
.modal-body img {
  width: 100%;
}

.card-hover:hover {
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
}

/* Fija la columna de las opciones a la derecha */
.top-fixed {
  position: sticky;
  /* top: 20px; */
  /* padding-top: 10px; */
  /* height: 100vh;  */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: space-between; */
}

</style>
