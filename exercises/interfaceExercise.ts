interface Computer {
    readonly id: number,
    Brand: string,
    RAM: number,
    Storage?: number,
    upgradeRAM(size: number): number
}

interface Shop extends Computer {
    Location: string,
    locate(): string
}

let Lenovot490: Computer = {
    id: 1,
    Brand: "Lenovo",
    RAM: 16,
    Storage: 256,
    upgradeRAM(size): number {
        return this.RAM + size
    }
}

let Luthuli: Shop = {
    id: 2,
    Brand: "Lenovo",
    RAM: 16,
    Storage: 256,
    Location: "Nairobi",
    upgradeRAM(size): number {
        return this.RAM + size
    },
    locate(): string {
        return `${this.Brand}`
    }
}

console.log(Luthuli.locate())
console.log(Lenovot490.upgradeRAM(4))