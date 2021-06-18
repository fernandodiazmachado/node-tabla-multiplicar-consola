# Notas
<ul>
    <li>Esta es una app de consola realizada con Node.js</li>
    <li>Opciones y Validaciones de consola realizadas con <a href="https://www.npmjs.com/package/yargs"> 'yargs'</a></li>
    <li>Dentro de la carpeta 'salida', realizo escritura en disco del resultado en un 'tabla-${base}.txt' con el paquete <a href="#"> 'fs'</a></li>
    <li>Muestro por consola el resultado con detalles en colores utilizando paquete <a href="https://www.npmjs.com/package/colors"> 'colors'</a></li>
  </ul>

```
Opciones:
      --help     Muestra ayuda                                        [booleano]
      --version  Muestra número de versión                            [booleano]
  -b, --base     Base de la tabla de multiplicar            [número] [requerido]
  -l, --listar   Muestra la tabla en consola         [booleano] [defecto: false]
  -h, --hasta    Indica hasta donde será la tabla         [número] [defecto: 10]
```