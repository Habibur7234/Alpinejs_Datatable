
window.data = {
    status:{
        name: false,
        address: false,
        branch: false,
        email:false
    },
    apiData: [],
    globalSearchText : "",
    searchText: [{
        name: "",
        address: "",
        branch: "",
        email:""
    }],
    async getApiData() {
        this.apiData = await (await fetch('https://62b04e7db0a980a2ef4ff30a.mockapi.io/api/shop')).json();
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
            for (let key in this.searchText[0]){
                    this.searchText[0][key] = ""
            }

            return this.apiData.filter(function (el) {

                    return el.name.startsWith(this) ||
                        el.branch.toString().startsWith(this) ||
                        el.address.startsWith(this) ||
                        el.email.startsWith(this);
                }, this.globalSearchText
            );

        }

        let query = {}
        for (let key in this.searchText[0]){
            if(this.searchText[0][key]){
                +this.searchText[0][key] ? query[key] = +this.searchText[0][key] : query[key] = this.searchText[0][key]
            }
        }
        return this.apiData.filter(search, query);
        function search(user){
            return Object.keys(this).every((key) => user[key].toString().startsWith(this[key]));
        }
        //return result

    },



}

