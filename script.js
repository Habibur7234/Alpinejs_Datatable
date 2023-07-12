
window.data = {
    status:{
        name:false,
        age:false,
        address: false
    },
    apiData: [],
    globalSearchText : "",
    searchText: [{
        name: "",
        address: "",
        age: ""
    }],
    async getApiData() {
        this.apiData = await (await fetch('https://62b15c56196a9e987033e9c4.mockapi.io/api/1/status')).json();
    },
    // addData() {
    //     let obj = {name: 'Ohh No ', address: 'address 2', age: 23, id: '2'}
    //     this.apiData.unshift(obj)
    // },
    // modifyData(dataID) {
    //     this.apiData.find((o, i) => {
    //         if (o.id === dataID) {
    //             this.apiData[i] = {name: 'BBBBB', address: 'address 2', age: 23, id: '2'};
    //             return true; // stop searching
    //         }
    //     });
    // },
    updateData() {

        if(this.globalSearchText){
            console.log("i entered")

            return this.apiData.filter(function (el) {

                    return el.name.startsWith(this) ||
                        el.age.toString().startsWith(this) ||
                        el.address.startsWith(this);
                }, this.globalSearchText
            );

        }

        let query = {}
        for (let key in this.searchText[0]){
            if(this.searchText[0][key]){
                +this.searchText[0][key] ? query[key] = +this.searchText[0][key] : query[key] = this.searchText[0][key]
            }
        }
        let result = this.apiData.filter(search, query);
        function search(user){
            return Object.keys(this).every((key) => user[key].toString().startsWith(this[key]));
        }
        return result

    },

}

