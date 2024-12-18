// employee type with id, name and department properties
type Employee = { id: number, name: string, department: string }

// manager type with id, name and employees as an array of Employee
type Manager = { id: number, name: string, employees: Employee[] }

// staff type, either Employee or Manager
type Staff = Employee | Manager

// print details
function printStaffDetails(person: Staff) {
    // type guard to check if employee property exists on param
    if ("employees" in person) {
        console.log(`Manager: ${person.name}, managing ${person.employees.map((n) => n.name)}`)
    }
    console.log(`Employee: ${person.name}`)
}


const John: Employee = { id: 1, name: "John", department: "IT" }
const Eunice: Manager = { id: 2, name: "Eunice", employees: [John] }

printStaffDetails(John)
printStaffDetails(Eunice)

