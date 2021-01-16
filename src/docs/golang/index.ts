/* eslint-disable no-irregular-whitespace */
import {
  orange,
  blue,
  bgGray,
  green,
  purple,
  blueBright,
  gray,
} from '../../style/style';

const documentationGo = {
  basic: {
    title: 'Sintaxe Básica',
    content: `
    Hello World

    File hello.go

    package main

    import "fmt"

    func main () {
      fmt.Println("Hello Go")
    }

    $ go run hello.go
    `,
  },
  operador: {
    title: 'Operadores',
    content: `
=> Aritmético

    |Operador |Descrição          |
    |---------|-------------------|
    |   '+ '  |adição             |
    |   '- '  |subtração          |
    |   '* '  |multiplicação      |
    |   '/ '  |quociente          |
    |   '% '  |restante           |
    |   '& '  |bitwise and        |
    |   '| '  |bitwise or         |
    |   '^ '  |bitwise xor        |
    |   '&^ ' |bit clear (and not)|
    |   '<< ' |deslocar à esquerda|
    |   '>> ' |deslocar à direita |

=> Comparação

    |Operator |Descrição            |
    |---------|---------------------|
    |  '== '  |equal                |
    |  '!= '  |diferente            |
    |  ' < '  |menor que            |
    |  '<= '  |menor que ou igual   |
    |  ' > '  |maior que            |
    |  '>= '  |maior que ou igual   |

=> Logico

    |Operador |Descrição  |
    |---------|-----------|
    |  '&& '  |lógico and |
    |  '|| '  |lógico or  |
    |  ' ! '  |lógico not |

=> Outros

    |Operador |Descrição                                     |
    |---------|----------------------------------------------|
    |   '& '  |endereço de / criar ponteiro                  |
    |   '* '  |ponteiro de desreferência                     |
    |   '<-'  |operador de envio / recebimento               |
    `,
  },
  declaracao: {
    title: 'Declaração',
    content: `

    O tipo vai depois do identificador!

  - Declaração sem inicialização
    var foo int

  - Declaração com inicialização
    var foo int = 42

  - Declara e inicia múltiplas variáveis de uma vez
    var foo, bar int = 42,1302

  - Tipo omitido, será inferido pelo compilador
    var foo = 42

  - Abreviadamente, apenas em corpos de funções, omite a palavra-chave var, o tipo está sempre implícito
    foo := 42

    const constante string = "eu sou uma constante"
    var variavel string = "eu sou uma variável"

    obs constante não aceita alteração em seu valor, use sempre contantes, caso haja a necessidade de alterar
    seu valor troque de const para var

    `,
  },
  funcoes: {
    title: 'Funções',
    content: `
=> Declaração de Função

  - Função simples
      func functionName() {}

  - Função com parâmetro (parâmetro + seu tipo)
      func functionName(param1 string, param2 int) {}

  - Função com parâmetros do mesmo tipo
      func functionName(param1, param2 int) {}

  - Função com retorno (int = tipo do retorno)
      func functionName() int {
          return 42
        }

  - Função com mais retornos
      func returnMulti() (int, string) {
          return 42,
          "foobar"
        }
      var x, str = returnMulti()

  - Função com retorno nomeado
      func returnMulti2() (n int, s string) {
          n = 42
          s = "foobar"
          // n e s será retornado
          return
        }
      var x, str = returnMulti2()



=> Funções como valores e fechamentos Closures

    func main() {
        // atribuir uma função a um nome
      add := func(a, b int) int {
          return a + b
      }
        // use o nome para chamar a função
      fmt.Println(add(3,4))
    }

      // Closures, lexically escopo: As funções podem acessar valores que foram
      // no escopo ao definir a função
    func scope() func() int{
        outer_var := 2
        foo := func() int { return outer_var
        }
        return foo
    }

    func another_scope() func() int{
        // não compilará porque outer_var e foo não estão definidos neste escopo
        outer_var = 444
        return foo
      }

      // Closures
    func outer() (func() int, int) {
        outer_var := 2
        inner := func() int {
            outer_var += 99 // outer_var from outer scope is mutated.
            return outer_var
        }
        inner()
        return inner, outer_var // return inner func and mutated outer_var 101
      }


=> Variadic Functions

      func main() {
      fmt.Println(adder(1,2,3)) // 6
      fmt.Println(adder(9,9)) // 18

      nums := []int{10,20,30}

      fmt.Println(adder(nums...)) // 60
        }


        // Usando ... antes do nome do tipo do último parâmetro, você pode indicar que ele leva zero ou mais desses parâmetros.
        // A função é invocada como qualquer outra função, exceto que podemos passar quantos argumentos quisermos.
      func adder(args ...int) int {

      total := 0
      for _, v := range args {
       // Repete os argumentos seja qual for o número
        total += v
      }
      return total
        }
      `,
  },
  // "built-in types": {
  //   "title": "Built-in Types",
  //     "content": [
  //       "    ```",
  //       "bool",
  //       "",
  //       "string",
  //       "",
  //       "int  int8  int16  int32  int64",
  //       "uint uint8 uint16 uint32 uint64 uintptr",
  //       "",
  //       "byte // alias for uint8",
  //       "",
  //       "rune // alias for int32 ~= a character (Unicode code point) - very Viking",
  //       "",
  //       "float32 float64",
  //       "",
  //       "complex64 complex128",
  //       "```",
  //       ""
  //     ]
  // },
  // "type conversions": {
  //   "title": "Type Conversions",
  //     "content": [
  //       "    ```go",
  //       "    var i int = 42",
  //       "    var f float64 = float64(i)",
  //       "    var u uint = uint(f)",
  //       "    ",
  //       "    // alternative syntax",
  //       "    i := 42",
  //       "    f := float64(i)",
  //       "    u := uint(f)",
  //       "    ```",
  //       ""
  //     ]
  // },
  // "packages": {
  //   "title": "Packages",
  //     "content": [
  //       "* Package declaration at top of every source file",
  //       "* Executables are in package `main`",
  //       "* Convention: package name == last name of import path (import path `math/rand` => package `rand`)",
  //       "* Upper case identifier: exported (visible from other packages)",
  //       "* Lower case identifier: private (not visible from other packages)",
  //       ""
  //     ]
  // },
  // "control structures": {
  //   "title": "Control structures",
  //     "content": [
  //       "If",
  //       "```go",
  //       "func main() {",
  //       "    // Basic one",
  //       "  if x > 10 {",
  //       "    return x",
  //       "    } else if x == 10 {",
  //       "    return 10",
  //       "    } else {",
  //       "    return -x",
  //       "    }",
  //       "    // You can put one statement before the condition",
  //       "  if a := b + c; a < 42 {",
  //       "    return a",
  //       "    } else {",
  //       "    return a - 42",
  //       "    }",
  //       "    // Type assertion inside if",
  //       "  var val interface{}",
  //       "  val = \"foo\"",
  //       "  if str, ok := val.(string); ok {",
  //       "    fmt.Println(str)",
  //       "    }",
  //       "  }",
  //       "```",
  //       "",
  //       "Loops",
  //       "```go",
  //       "    // There's only `for`, no `while`, no `until`",
  //       "    for i := 1; i < 10; i++ {}",
  //       "    for ; i < 10;  { // while - loop",
  //       "  }",
  //       "    for i < 10  { // you can omit semicolons if there is only a condition",
  //       "  }",
  //       "    for { // you can omit the condition ~ while (true)",
  //       "  }",
  //       "  // use break/continue on current loop",
  //       "  // use break/continue with label on outer loop",
  //       "here:",
  //       "    for i := 0; i < 2; i++ {",
  //       "        for j := i + 1; j < 3; j++ {",
  //       "            if i == 0 {",
  //       "                continue here",
  //       "      }",
  //       "            fmt.Println(j)",
  //       "            if j == 2 {",
  //       "                break",
  //       "      }",
  //       "    }",
  //       "  }",
  //       "",
  //       "there:",
  //       "    for i := 0; i < 2; i++ {",
  //       "        for j := i + 1; j < 3; j++ {",
  //       "            if j == 1 {",
  //       "                continue",
  //       "      }",
  //       "            fmt.Println(j)",
  //       "            if j == 2 {",
  //       "                break there",
  //       "      }",
  //       "    }",
  //       "  }",
  //       "```",
  //       "",
  //       "### Switch",
  //       "```go",
  //       "    // switch statement",
  //       "    switch operatingSystem {",
  //       "    case \"darwin\":",
  //       "        fmt.Println(\"Mac OS Hipster\")",
  //       "        // cases break automatically, no fallthrough by default",
  //       "    case \"linux\":",
  //       "        fmt.Println(\"Linux Geek\")",
  //       "    default:",
  //       "    // Windows, BSD, ...",
  //       "        fmt.Println(\"Other\")",
  //       "  }",
  //       "  // as with for and if, you can have an assignment statement before the switch value",
  //       "    switch os := runtime.GOOS; os {",
  //       "    case \"darwin\": ...",
  //       "  }",
  //       "  // you can also make comparisons in switch cases",
  //       "    number := 42",
  //       "    switch {",
  //       "        case number < 42:",
  //       "            fmt.Println(\"Smaller\")",
  //       "        case number == 42:",
  //       "            fmt.Println(\"Equal\")",
  //       "        case number > 42:",
  //       "            fmt.Println(\"Greater\")",
  //       "  }",
  //       "  // cases can be presented in comma-separated lists",
  //       "    var char byte = '?'",
  //       "    switch char {",
  //       "        case ' ', '?', '&', '=', '#', '+', '%':",
  //       "            fmt.Println(\"Should escape\")",
  //       "  }",
  //       "```",
  //       ""
  //     ]
  // },
  // "arrays slices ranges": {
  //   "title": "Arrays, Slices, Ranges",
  //     "content": [
  //       "Arrays",
  //       "```go",
  //       "var a [10]int // declare an int array with length 10. Array length is part of the type!",
  //       "a[3] = 42 // set elements",
  //       "i := a[3] // read elements",
  //       "  // declare and initialize",
  //       "var a = [2]int{1,2}",
  //       "a := [2]int{1,2} //shorthand",
  //       "a := [...]int{1,2} // elipsis -> Compiler figures out array length",
  //       "```",
  //       "",
  //       "Slices",
  //       "```go",
  //       "var a []int // declare a slice - similar to an array, but length is unspecified",
  //       "var a = []int {1,2,3,4} // declare and initialize a slice (backed by the array given implicitly)",
  //       "a := []int{1,2,3,4} // shorthand",
  //       "chars := []string{0: \"a\",2: \"c\",1: \"b\"} // [\"a\", \"b\", \"c\"]",
  //       "",
  //       "var b = a[lo:hi] // creates a slice (view of the array) from index lo to hi-1",
  //       "var b = a[1: 4] // slice from index 1 to 3",
  //       "var b = a[: 3] // missing low index implies 0",
  //       "var b = a[3:] // missing high index implies len(a)",
  //       "a =  append(a,17,3) // append items to slice a",
  //       "c := append(a,b...) // concatenate slices a and b",
  //       "",
  //       "// create a slice with make",
  //       "a = make([]byte,5,5) // first arg length, second capacity",
  //       "a = make([]byte,5) // capacity is optional",
  //       "",
  //       "// create a slice from an array",
  //       "x := [3]string{\"Лайка\",\"Белка\",\"Стрелка\"}",
  //       "s := x[:] // a slice referencing the storage of x",
  //       "```",
  //       ""
  //     ]
  // },
  // "operations on Arrays and Slices": {
  //   "title": "Operations on Arrays and Slices",
  //     "content": [
  //       "`len(a)` gives you the length of an array/a slice. It's a built-in function, not a attribute/method on the array.",
  //       "```go",
  //       "// loop over an array/a slice",
  //       "for i, e := range a {",
  //       "    // i is the index, e the element",
  //       "  }",
  //       "  // if you only need e:",
  //       "for _, e := range a {",
  //       "    // e is the element",
  //       "  }",
  //       "  // ...and if you only need the index",
  //       "for i := range a {}",
  //       "  // In Go pre-1.4, you'll get a compiler error if you're not using i and e.",
  //       "  // Go 1.4 introduced a variable-free form, so that you can do this",
  //       "for range time.Tick(time.Second) {",
  //       "    // do it once a sec",
  //       "  }",
  //       "",
  //       "```",
  //       ""
  //     ]
  // },
  // "Maps": {
  //   "title": "Maps",
  //     "content": [
  //       "```go",
  //       "var m map[string]int",
  //       "m = make(map[string]int)",
  //       "m[\"key\"] = 42",
  //       "fmt.Println(m[\"key\"])",
  //       "",
  //       "delete(m,\"key\")",
  //       "",
  //       "elem, ok := m[\"key\"] // test if key \"key\" is present and retrieve it, if so",
  //       "  // map literal",
  //       "var m = map[string",
  //       "  ]Vertex{",
  //       "    \"Bell Labs\": {40.68433,-74.39967},",
  //       "    \"Google\": {37.42202,-122.08408},",
  //       "  }",
  //       "  // iterate over map content",
  //       "for key, value := range m {}",
  //       "",
  //       "```",
  //       ""
  //     ]
  // },
  // "structs": {
  //   "title": "Structs",
  //     "content": [
  //       "",
  //       "There are no classes, only structs. Structs can have methods.",
  //       "```go",
  //       "// A struct is a type. It's also a collection of fields",
  //       "",
  //       "// Declaration",
  //       "type Vertex struct {X, Y int}  ",
  //       "",
  //       "// Creating",
  //       "var v = Vertex{1,2}",
  //       "var v = Vertex{X: 1, Y: 2} // Creates a struct by defining values with keys",
  //       "var v = []Vertex{{1,2},{5,2},{5,5}} // Initialize a slice of structs",
  //       "",
  //       "// Accessing members",
  //       "v.X = 4",
  //       "",
  //       "// You can declare methods on structs. The struct you want to declare the",
  //       "// method on (the receiving type) comes between the the func keyword and",
  //       "// the method name. The struct is copied on each method call(!)",
  //       "func (v Vertex) Abs() float64 {",
  //       "    return math.Sqrt(v.X*v.X + v.Y*v.Y)",
  //       "  }",
  //       "",
  //       "// Call method",
  //       "v.Abs()",
  //       "",
  //       "// For mutating methods, you need to use a pointer (see below) to the Struct",
  //       "  // as the type. With this, the struct value is not copied for the method call.",
  //       "func (v *Vertex) add(n float64) {",
  //       "    v.X += n",
  //       "    v.Y += n",
  //       "  }",
  //       "",
  //       "```",
  //       "**Anonymous structs:**",
  //       "Cheaper and safer than using `map[string]interface{}`.",
  //       "```go",
  //       "",
  //       "point := struct {",
  //       "  X, Y int",
  //       "  }{1,2}",
  //       "```",
  //       ""
  //     ]
  // },
  // "pointers": {
  //   "title": "Pointers",
  //     "content": [
  //       "",
  //       "    ```go",
  //       "p := Vertex{",
  //       "    1,",
  //       "    2",
  //       "  } // p is a Vertex",
  //       "q := &p // q is a pointer to a Vertex",
  //       "r := &Vertex{",
  //       "    1,",
  //       "    2",
  //       "  } // r is also a pointer to a Vertex",
  //       "  // The type of a pointer to a Vertex is *Vertex",
  //       "",
  //       "var s *Vertex = new(Vertex) // new creates a pointer to a new struct instance",
  //       "```",
  //       ""
  //     ]
  // },
  // "interfaces": {
  //   "title": "Interfaces",
  //     "content": [
  //       "",
  //       "```go",
  //       "// interface declaration",
  //       "type Awesomizer interface {",
  //       "    Awesomize() string",
  //       "  }",
  //       "  // types do *not* declare to implement interfaces",
  //       "type Foo struct {}",
  //       "  // instead, types implicitly satisfy an interface if they implement all required methods",
  //       "func (foo Foo) Awesomize() string {",
  //       "    return \"Awesome!\"",
  //       "  }",
  //       "```",
  //       ""
  //     ]
  // },
  // "embedding": {
  //   "title": "Embedding",
  //     "content": [
  //       "",
  //       "There is no subclassing in Go. Instead, there is interface and struct embedding.",
  //       "```go",
  //       "// ReadWriter implementations must satisfy both Reader and Writer",
  //       "type ReadWriter interface {",
  //       "    Reader",
  //       "    Writer",
  //       "  }",
  //       "  // Server exposes all the methods that Logger has",
  //       "type Server struct {",
  //       "    Host string",
  //       "    Port int",
  //       "    *log.Logger",
  //       "  }",
  //       "  // initialize the embedded type the usual way",
  //       "server := &Server{",
  //       "    \"localhost\",",
  //       "    80, log.New(...)",
  //       "  }",
  //       "  // methods implemented on the embedded struct are passed through",
  //       "server.Log(...) // calls server.Logger.Log(...)",
  //       "",
  //       "// the field name of the embedded type is its type name (in this case Logger)",
  //       "var logger *log.Logger = server.Logger",
  //       "```",
  //       ""
  //     ]
  // },
  // "errors": {
  //   "title": "Errors",
  //     "content": [
  //       "",
  //       "There is no exception handling. Functions that might produce an error just declare an additional return value of type `Error`. This is the `Error` interface:",
  //       "```go",
  //       "type error interface {",
  //       "    Error() string",
  //       "  }",
  //       "```",
  //       "",
  //       "A function that might return an error:",
  //       "```go",
  //       "func doStuff() (int, error) {}",
  //       "",
  //       "func main() {",
  //       "    result, err := doStuff()",
  //       "    if err != nil {",
  //       "      // handle error",
  //       "    } else {",
  //       "      // all is good, use result",
  //       "    }",
  //       "  }",
  //       "```",
  //       ""
  //     ]
  // },
  // "concurrency": {
  //   "title": "Concurrency",
  //     "content": [
  //       "Goroutines",
  //       "",
  //       "Goroutines are lightweight threads (managed by Go, not OS threads). `go f(a, b)` starts a new goroutine which runs `f` (given `f` is a function).",
  //       "",
  //       "```go",
  //       "// just a function (which can be later started as a goroutine)",
  //       "func doStuff(s string) {}",
  //       "",
  //       "func main() {",
  //       "    // using a named function in a goroutine",
  //       "    go doStuff(\"foobar\")",
  //       "",
  //       "    // using an anonymous inner function in a goroutine",
  //       "    go func (x int) {",
  //       "      // function body goes here",
  //       "    }(42)",
  //       "  }",
  //       "```",
  //       "",
  //       "Channels",
  //       "",
  //       "```go",
  //       "ch := make(chan int) // create a channel of type int",
  //       "ch <- 42 // Send a value to the channel ch.",
  //       "v := <-ch // Receive a value from ch",
  //       "",
  //       "// Non-buffered channels block. Read blocks when no value is available, write blocks until there is a read.",
  //       "",
  //       "// Create a buffered channel. Writing to a buffered channels does not block if less than <buffer size> unread values have been written.",
  //       "ch := make(chan int,",
  //       "  100)",
  //       "",
  //       "close(ch) // closes the channel (only sender should close)",
  //       "",
  //       "// read from channel and test if it has been closed",
  //       "v, ok := <-ch",
  //       "",
  //       "// if ok is false, channel has been closed",
  //       "",
  //       "// Read from channel until it is closed",
  //       "for i := range ch {",
  //       "    fmt.Println(i)",
  //       "  }",
  //       "",
  //       "// select blocks on multiple channel operations, if one unblocks, the corresponding case is executed",
  //       "func doStuff(channelOut, channelIn chan int) {",
  //       "    select {",
  //       "    case channelOut <- 42:",
  //       "        fmt.Println(\"We could write to channelOut!\")",
  //       "    case x := <- channelIn:",
  //       "        fmt.Println(\"We could read from channelIn\")",
  //       "    case <-time.After(time.Second * 1):",
  //       "        fmt.Println(\"timeout\")",
  //       "    }",
  //       "  }",
  //       "```",
  //       "",
  //       "Channel Axioms",
  //       "- A send to a nil channel blocks forever",
  //       "",
  //       "  ```go",
  //       "  var c chan string",
  //       "  c <- \"Hello, World!\"",
  //       "  // fatal error: all goroutines are asleep - deadlock!",
  //       "  ```",
  //       "- A receive from a nil channel blocks forever",
  //       "",
  //       "  ```go",
  //       "  var c chan string",
  //       "  fmt.Println(<-c)",
  //       "  // fatal error: all goroutines are asleep - deadlock!",
  //       "  ```",
  //       "- A send to a closed channel panics",
  //       "",
  //       "  ```go",
  //       "  var c = make(chan string,",
  //       "  1)",
  //       "  c <- \"Hello, World!\"",
  //       "  close(c)",
  //       "  c <- \"Hello, Panic!\"",
  //       "  // panic: send on closed channel",
  //       "  ```",
  //       "- A receive from a closed channel returns the zero value immediately",
  //       "",
  //       "  ```go",
  //       "  var c = make(chan int,",
  //       "  2)",
  //       "  c <- 1",
  //       "  c <- 2",
  //       "  close(c)",
  //       "  for i := 0; i < 3; i++ {",
  //       "      fmt.Printf(\"%d \", <-c)",
  //       "  }",
  //       "  // 1 2 0",
  //       "  ```",
  //       ""
  //     ]
  // },
  // "printing": {
  //   "title": "Printing",
  //     "content": [
  //       "```go",
  //       "fmt.Println(\"Hello, 你好, नमस्ते, Привет, ᎣᏏᏲ\") // basic print, plus newline",
  //       "p := struct { X, Y int}{17,2}",
  //       "fmt.Println( \"My point:\", p,\"x coord=\", p.X ) // print structs, ints, etc",
  //       "s := fmt.Sprintln( \"My point:\", p,\"x coord=\", p.X ) // print to string variable",
  //       "",
  //       "fmt.Printf(\"%d hex:%x bin:%b fp:%f sci:%e\",",
  //       "  17,",
  //       "  17,",
  //       "  17,",
  //       "  17.0,",
  //       "  17.0) // c-ish format",
  //       "s2 := fmt.Sprintf( \"%d %f\",17,17.0 ) // formatted print to string variable",
  //       "",
  //       "hellomsg := `",
  //       " \"Hello\" in Chinese is 你好 ('Ni Hao')",
  //       " \"Hello\" in Hindi is नमस्ते ('Namaste')",
  //       "` // multi-line string literal, using back-tick at beginning and end",
  //       "```",
  //       ""
  //     ]
  // },
  // "reflection": {
  //   "title": "Reflection",
  //     "content": [
  //       "Type Switch",
  //       "A type switch is like a regular switch statement, but the cases in a type switch specify types (not values), and those values are compared against the type of the value held by the given interface value.",
  //       "```go",
  //       "func do(i interface{}) {",
  //       "  switch v := i.(type) {",
  //       "  case int:",
  //       "    fmt.Printf(\"Twice %v is %v\n\", v, v*2)",
  //       "  case string:",
  //       "    fmt.Printf(\"%q is %v bytes long\n\", v, len(v))",
  //       "  default:",
  //       "    fmt.Printf(\"I don't know about type %T!\n\", v)",
  //       "    }",
  //       "  }",
  //       "",
  //       "func main() {",
  //       "  do(21)",
  //       "  do(\"hello\")",
  //       "  do(true)",
  //       "  }",
  //       "```",
  //       ""
  //     ]
  // },
  // "snippets": {
  //   "title": "Snippets",
  //     "content": [
  //       "",
  //       "HTTP Server",
  //       "```go",
  //       "package main",
  //       "",
  //       "import (",
  //       "    \"fmt\"",
  //       "    \"net/http\"",
  //       ")",
  //       "",
  //       "// define a type for the response",
  //       "type Hello struct{}",
  //       "  // let that type implement the ServeHTTP method (defined in interface http.Handler)",
  //       "func (h Hello) ServeHTTP(w http.ResponseWriter, r *http.Request) {",
  //       "    fmt.Fprint(w,",
  //       "    \"Hello!\")",
  //       "  }",
  //       "",
  //       "func main() {",
  //       "    var h Hello",
  //       "    http.ListenAndServe(\"localhost:4000\", h)",
  //       "  }",
  //       "  // Here's the method signature of http.ServeHTTP:",
  //       "  // type Handler interface {",
  //       "  //     ServeHTTP(w http.ResponseWriter, r *http.Request)",
  //       "  // }",
  //       "```"
  //     ]
  // },
  // "reference": {
  //   "title": "a8m",
  //     "content": [
  //       "https://github.com/a8m/golang-cheat-sheet"
  //     ]
  // }
};

export default documentationGo;