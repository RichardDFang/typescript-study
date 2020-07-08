let passcode = "secret passcode";

class Employee1 {
    private _fullName!: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee1 = new Employee1();
employee1.fullName = "Bob Smith";
if (employee1.fullName) {
    alert(employee1.fullName);
}