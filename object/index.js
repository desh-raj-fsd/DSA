/**
 * Object Methods in JavaScript
 *
 * JavaScript objects are used to store collections of data and more complex entities. Objects are collections of key-value pairs, where the keys are strings (or Symbols) and the values can be of any data type.
 * JavaScript provides many methods to perform operations on objects, such as creating, modifying, and iterating over objects.
 * Here is a summary of the commonly used object methods:
 *
 * Object Creation and Manipulation
 * Method                       Description
 * Object.create()              Creates a new object with the specified prototype object and properties.
 * Object.assign()              Copies the values of all enumerable own properties from one or more source objects to a 
                                target object.
 * Object.defineProperty()      Adds a property to an object with the specified descriptor.
 * Object.defineProperties()    Adds multiple properties to an object with the specified descriptors.
 * Object.freeze()              Freezes an object, preventing new properties from being added and existing properties from being modified or deleted.
 * Object.seal()                Seals an object, preventing new properties from being added and marking all existing properties as non-configurable.
 * Object.preventExtensions()   Prevents new properties from ever being added to an object.
 * Object.isExtensible()        Checks if new properties can be added to an object.
 * Object.isFrozen()            Checks if an object is frozen.
 * Object.isSealed()            Checks if an object is sealed.
 *
 * Property Access and Manipulation
 * Method                               Description
 * Object.keys()                        Returns an array of a given object's own enumerable property names.
 * Object.values()                      Returns an array of a given object's own enumerable property values.
 * Object.entries()                     Returns an array of a given object's own enumerable property [key, value] pairs.
 * Object.getOwnPropertyDescriptor()    Returns a property descriptor for a named property on an object.
 * Object.getOwnPropertyDescriptors()   Returns an object containing all own property descriptors of an object.
 * Object.getOwnPropertyNames()         Returns an array of all properties (enumerable or not) found on a given object.
 * Object.getOwnPropertySymbols()       Returns an array of all symbol properties found directly on a given object.
 * Object.hasOwn()                      Checks if an object has a property with the specified key as its own property.
 * Reflect.ownKeys()                    Returns an array of the target object's own property keys, including symbols.
 *
 * Prototype and Inheritance
 * Method                       Description
 * Object.getPrototypeOf()      Returns the prototype (internal [[Prototype]] property) of a specified object.
 * Object.setPrototypeOf()      Sets the prototype (internal [[Prototype]] property) of a specified object to another object or null.
 *
 * Object Comparison and Integrity
 * Method                Description
 * Object.is()           Compares if two values are the same value.
 * Object.isExtensible() Checks if an object is extensible (whether it can have new properties added to it).
 * Object.isFrozen()     Checks if an object is frozen.
 * Object.isSealed()     Checks if an object is sealed.
 *
 * Additional Object Methods
 * Method                                   Description
 * Object.fromEntries()                     Transforms a list of key-value pairs into an object.
 * Object.toString()                        Returns a string representation of an object.
 * Object.valueOf()                         Returns the primitive value of the specified object.
 * Object.prototype.hasOwnProperty()        Checks if the object has the specified property as its own property (not inherited).
 * Object.prototype.propertyIsEnumerable()  Checks if the specified property is enumerable.
 * Object.prototype.isPrototypeOf()         Checks if an object exists in another object's prototype chain.
 * Object.prototype.toLocaleString()        Converts the object to a string, localizing the string format based on 
                                            the host environment's current locale.
 * Reflect.getOwnPropertyDescriptor()       Retrieves the descriptor of an object's property.
 * Reflect.getPrototypeOf()                 Retrieves the prototype of an object.
 * Reflect.setPrototypeOf()                 Sets the prototype of an object.
 */
