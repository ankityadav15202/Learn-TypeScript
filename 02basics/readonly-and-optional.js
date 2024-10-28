"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: "52775",
    name: "ankit",
    email: "asfd",
    isActive: false
};
// readonly Modifier
// The readonly modifier ensures that a property cannot be modified after it has been initialized. It is useful when you want to protect certain properties from being changed.
// Key Points for readonly:
// A property marked readonly can only be set during initialization (either directly when creating the object or inside a constructor).
// It prevents accidental modification of data.
// Optional (?) Properties
// Optional properties allow you to define properties that are not required when creating an object. This is useful when some properties might not always have values.
// Key Points for Optional (?) Properties:
// Optional properties can either be present or absent in the object.
// The type of an optional property is effectively T | undefined (for example, age?: number means age can be either a number or undefined).
