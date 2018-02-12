# GENERAR DESPLEGABLE DE PAÍSES MEDIANTE DOM

Para generarlo, primero meteremos en un array, todos los países y crearemos la etiqueta _option_ con _createElement_ para así mostrar el desplegable de todos los países guardados anteriormente en el array. Usaremos el método _appendChild_ para referirnos al hijo del elemento que seleccionamos.



# CREAR Y BORRAR EL CAMPO &quot;TARJETA DE CRÉDITO&quot;  CON JQUERY

Para crear el campo &quot;tarjeta de crédito&quot;, los requisitos que nos piden son que en el campo de &quot;dirección&quot; haya algo escrito y que en el _option_ de los países haya alguno seleccionado.

Por tanto, obtendremos el campo &quot;dirección&quot; con DOM mediante el método _getElementsByClassName_ y comprobaremos que el campo dirección y la opción de los países estén seleccionados. Tras esto, usaremos el método _append_ de Jquery para introducir el elemento de Tarjeta de crédito en la etiqueta _label._

Por el contrario si el campo de &quot;dirección&quot; o no hay ningún país seleccionado, el elemento Tarjeta de crédito será eliminado con el método _remove_.

# CREAR COMENTARIOS MEDIANTE DOM

Para ello, hemos usado Jquery y hemos seguido los mismos pasos que en el anterior apartado de la &quot;Tarjeta de crédito&quot;. No hemos podido implementar el guardado de los comentarios ya que no nos ha dado tiempo.
