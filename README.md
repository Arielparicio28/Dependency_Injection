# Dependency_Injection
Dependency Injection es una técnica que se utiliza para lograr un código más modular, flexible y mantenible, al permitir que las dependencias de un objeto sean suministradas desde el exterior, en lugar de ser creadas internamente. Esto facilita la separación de responsabilidades y reduce el acoplamiento entre los componentes de un sistema.

1- Constructor Injection:

La idea principal detrás de la Constructor Injection es que una clase dependiente (la clase que necesita la instancia de otra clase) no debe crear directamente esa instancia, sino recibirla a través de su constructor. Esto promueve una mayor modularidad y desacopla las clases, lo que facilita la reutilización y el mantenimiento del código.

En la Constructor Injection, la dependencia se declara como un parámetro en el constructor de la clase dependiente. Cuando se crea una instancia de la clase dependiente, se debe proporcionar la instancia de la clase requerida. A menudo, esto se hace utilizando una interfaz para la clase dependiente, lo que permite la flexibilidad de cambiar la implementación de la clase requerida sin afectar la clase dependiente

2- Setter Injection :

La Setter Injection es un patrón de inyección de dependencias en el cual las dependencias de una clase se establecen a través de métodos setters en lugar de ser proporcionadas en el constructor. En la Setter Injection, las dependencias son opcionales y pueden ser asignadas en cualquier momento después de la creación de la instancia.

En general, la Setter Injection es una alternativa al patrón de Constructor Injection, y se utiliza cuando las dependencias son opcionales o pueden cambiar después de la creación de la instancia. Es importante tener en cuenta las ventajas y desventajas de cada enfoque y elegir el más adecuado para cada situación.

3- Interface Injection:

El término "Interface Injection" (Inyección por Interfaz) no es ampliamente utilizado en el contexto de la inyección de dependencias. Sin embargo, podemos resumir el concepto de "Inversión de Dependencias a través de Interfaces", que es un enfoque similar y se utiliza para lograr una mayor flexibilidad y desacoplamiento en un sistema.

En resumen, la Inversión de Dependencias a través de Interfaces es un enfoque que utiliza interfaces para definir dependencias en lugar de implementaciones concretas. Esto promueve la flexibilidad, el desacoplamiento y la modularidad en un sistema, permitiendo cambiar las implementaciones fácilmente sin afectar la clase dependiente.



