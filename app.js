// // renderizacion condicional

// // componentes de saludo
// function UserGreating() {
//     return <h1>Welcome back!</h1>;
// };

// function GuestGreeting () {
//     return <h1>Please sign up.</h1>;
// };

// // componente que compara los estados

// function Greeting (props) {
//     if (props.IsLoggedIn) {
//         return <UserGreating/>;
//     } else {
//         return <GuestGreeting/>;
//     }
// };

// ReactDOM.render(
//     <Greeting IsLoggedIn={true} />,
//     document.getElementById("general_container")
// )

// ejercicio 1 Explica por qué no se ve el mensaje "Si ves esto React no está funcionando"

// const DOM = React.DOM

//     function Saludo(props) {
//       return DOM.h1(null, 'Hola '+props.nombre)
//     }

//     ReactDOM.render(
//       Saludo({ nombre: '' }),
//       document.getElementById('react-container')
//     );

const DOM = React.DOM

    function Cabecera(props) {
    //   const saludo = props.saludo;

      return DOM.div(null,
        DOM.h2(null, 'Cabecera'),
        DOM.h3(null, saludo),
        DOM.p(null,
          saludo,
          DOM.hr(null)
        ),
        DOM.div(null, 'Chau!')
      )
    }
    const saludo = 'Mundo'

    ReactDOM.render(
      Cabecera({ saludo: saludo }),
      document.getElementById('react-container')
    );