# crear una llave 
set user:1000 "user"
# crea un valor
set name "some"
# mostrar info
get user:2000
# actualizar valor
set name "otro"
# mostrar las llaves 
keys user:*
# si existe 
exists user:1000
# renombrar llave de 1000 a 2000
rename user:1000 user:2000
# muestra el tipo de dato
type user:2000
# agregar mas informacion 
append user:2000 " otro valor"
# cantidad de caracteres 
strlen user:2000
# aumentar con incr y decrementa con decr 
incr user 
# crea o actualiza clave valor 
hset user:20 nombre "a" edad "1"
# hget obtener valor 
hget user:20 nombre
# lpush anade un elemento al principio
lpush lista "a" "b" "c"
# rpush anade un nuevo elemento al final de la lista
rpush lista "d"
# lrange lista obtiene un elemento o varios 
lrange lista 0 -1
# sadd agregar uno o mas elemetos sin repatir
sadd lista2 "a" "b" "c" 
# mostrar lista de elemetos
smembers lista2
# eliminar un elemento
srem lista2 "a"
# crear hash
HSET user nombre "uno" edad 1
# anade otro elemento
HSET user pais "algo"
# traer todos los campos
HGETALL user
# eliminar un elemento del hash
HDEL user nombre
# comprobar que existe
HEXIST user nombre
# cuenta los elementos
HLEN user




set user:10 "one!
keys user:*
exists user:10
rename user:10 user:20
type user:20
append user:20 " other"
get user:20
strlen user:20
incr user:20


