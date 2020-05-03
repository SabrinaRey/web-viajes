### Comentarios

Chicas, primero lo primero: felicitarlas por un enorme trabajo. Se que la API era complicada y estoy muy orgullosa de lo bien que navegaron distintos problemas que fueron surgiendo. La web se ve muy bien!

El proyecto está más que aprobado, y todas las observaciones que vienen a continuación son simplemente para mejorar lo ya hecho. 

- Mejoren el README así la gente que se mete a su github (les aseguro que lo harán potenciales reclutadores), tiene una mejor idea de su web: qué hace, en qué tecnologías está hecha y la API con la que se comunica. Aclarar también que solo permite búsquedas con códigos IATA y alguna sugerencia de vuelos que funcionen para ver. Una buena idea también es poner el link a la web en now, para eso van a necesitar corregir lo de las variables de entorno. Si necesitan ayuda con eso, escríbanme!.

- El responsive está bastante bien, pero hay algunas cosas que rompen. Principalmente las tarjetas de resultados deberían estar en flex-direction: column así las cosas se ven una debajo de la otra y no amontonadas a la izquierda. También sumaría, en materia de estilados, mejorar los input y los botones, particularmente en los bordes: los que trae HTML por defecto dan una impresión de descuido. 

- El código en general está muy bien a nivel ténico pero *extremadamente* desprolijo. Cuesta muchísimo leerlo. Alguna vez les conté el consejo que me dieron en mi primer trabajo? "Organizá tu código como si lo fuera a leer un psicópata fanático del orden con muy poca paciencia y muchos cuchillos en su casa". Si yo fuera ese psicópata... bueno, no estarían leyendo esto ahora. 

En particular: hay muchos saltos de línea que no tiene sentido, tabulado inconsistente, variables que se declaran y no se usan, muchos console.log olvidados por ahí y muchos warnings en la consola. A cada una de esas cosas les van a prestar mucha atención quienes consideren contratarlas, así que traten de acostumbrarse desde ahora a corregirlas antes de entregar un trabajo. Lo ideal es que una vaya incorporando de a poco escribir de manera prolija, pero siempre es recomendable también tener un "linter" en Visual Studio. El que les recomiendo es Prettier. Con solo hacer clic derecho y "Format Document" van a ver la diferencia entre el código. Si prefieren no usar un linter, con usar el que trae Visual Studio por defecto haciendo clic en Format Document ya suman un montón. 

- Tengan en cuenta especialmente lo del tabulado, ya que contribuye a que la jerarquía de las cosas quede clara. Siempre son dos espacios o dos tabs (eso es preferencia de cada una) cuando algo está debajo en la jerarquía de otra cosa, ya sea un estilo de css, una etiqueta de html o el código dentro de una función. No agreguen enter porque sí, la organización visual del código es muy importante. 

- Tenemos un componente que se llama Form y uno que se llama FormTest. Form se usa en Main, FormTest en App. Main creo que no se usa en ningún lado. Traten de no dejar archivos innecesarios en su código, ya que complica entender qué hacer cada cosa. 

- Dejo varios comentarios a lo largo del código. 
