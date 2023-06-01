# Dependency_Injection
Dependency Injection es una técnica que se utiliza para lograr un código más modular, flexible y mantenible, al permitir que las dependencias de un objeto sean suministradas desde el exterior, en lugar de ser creadas internamente. Esto facilita la separación de responsabilidades y reduce el acoplamiento entre los componentes de un sistema.

1- Constructor Injection:

La idea principal detrás de la Constructor Injection es que una clase dependiente (la clase que necesita la instancia de otra clase) no debe crear directamente esa instancia, sino recibirla a través de su constructor. Esto promueve una mayor modularidad y desacopla las clases, lo que facilita la reutilización y el mantenimiento del código.

En la Constructor Injection, la dependencia se declara como un parámetro en el constructor de la clase dependiente. Cuando se crea una instancia de la clase dependiente, se debe proporcionar la instancia de la clase requerida. A menudo, esto se hace utilizando una interfaz para la clase dependiente, lo que permite la flexibilidad de cambiar la implementación de la clase requerida sin afectar la clase dependiente