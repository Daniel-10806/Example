class Developer{
    firstname;
    lastname;
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    get fullname() {
        return this.firstname + ' ' + this.lastname;
    }
}