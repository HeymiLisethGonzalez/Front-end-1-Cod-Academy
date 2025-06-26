// eventos:
// 1) Crear la variable-> qué etiqueta va a usar el evento.
// 2) Usar el evento.


const btnSearchElement = document.querySelector('.btn-search');
//btnSearchElement.addEventListener('click', () => console.log('Le diste click al boton'));
//btnSearchElement.addEventListener('dblclick', () => console.log('Le diste doble click al boton'))

const FormSearchElement = document.getElementById('heroSearchForm');
// FormSearchElement.addEventListener('submit', (event) => {
//     event.preventDefault()
//     console.log('enviaste los datos de tu formulario.')
// })

const seccionNavegation = document.getElementById('navegacion');
//seccionNavegation.addEventListener('mouseover', () => console.log('Soy el mouse moviendose'))
//seccionNavegation.addEventListener('mousemove', () => console.log('Soy el mouse dentro del elemento'))

const inputSearchElement = document.getElementById('heroSearchForm');
//inputSearchElement.addEventListener('input', () => console.log('Estas escribiendo'));
//inputSearchElement.addEventListener('change', () => console.log('Estas escribiendo v.2'))
// inputSearchElement.addEventListener('keyup', () => console.log('Soltaste la tecla.'))
//inputSearchElement.addEventListener('keyup', (event) => console.log('Soltaste la tecla.', event.target.value))

const selectOpcionElement = document.getElementById('select-opcion');
//selectOpcionElement.addEventListener('change', () => console.log('Has seleccionado la opcion ---'))


window.addEventListener('scroll', () => {
    //console.log('Estas haciendo scroll en la pantalla de manera vertical.', window.scrollY);
    // condicionales. Cambia el color de fondo cuando scroleo 1000 veces de manera vertical.
    // if (window.scrollY >= 1000) {
    //     document.body.style.backgroundColor = '#000';
    // } else if (window.scrollY < 1000) {
    //     document.body.style.backgroundColor = '#fff';
    // }
});


const btnScrollTop = document.querySelector('btn-scroll-top')
btnScrollTop.addEventListener('click', () => window.scrollTo(0, 0)) // scrollTo: que vaya hacia arriba.