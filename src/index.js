// Entry
class Entry {
constructor(date, amount, description) {
this.date = date;
this.amount = amount;
this.description = description;
}
getFormattedAmount() {
    return `${this.amount} €`
}
}

// Income
class Income extends Entry {
constructor(date, amount, description) {
    super(date, amount, description)
    this.type = "income"; 
}
}

// Expense
class Expense extends Entry {
constructor(date, amount, description, category) {
    super(date, amount, description);
    this.paid = category; 
    this.type = "expense";
}
getFormattedAmount() {
    return `-${this.amount} €`
}

}

// Budget
class Budget {
constructor(){
    this.entries = [];
}

    addEntry(newEntry){
        this.entries.push[newEntry]; 

    }
    getTotalIncome(){

    }
    getTotalExpense(){

    }
    getCurrentBalance(){

    }


}
