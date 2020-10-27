import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';

export class Rocket {
    name: string;
    totalCapacityKg: number; 
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass( items: Payload[] ): number {
        let total = 0;
        for (let i = 0; i < items.length; i++) {
            total += items[i].massKg;
        }
        return total;
        //returns sum of all items using each item's massKg property;
    }
    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        //uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems;
    }
    canAdd(item: Payload): boolean {
        return (this.currentMassKg() + item.massKg <= this.totalCapacityKg);
        //returns true if this.currentMassKg() + item.massKg <= this.totalCapacityLg;
    }
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
        //uses this.canAdd() to see if another item can be added
        //if true, adds cargo to this.cargoItems and returns true
        //if false, returns false 
    }
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
        //uses this.canAdd() to see if another ast can be added
        //if true, adds astronaut to this.astronauts and returns true
        //if false, returns false 
    }
 }