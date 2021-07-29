const root = new Vue({
    el: "#root",
    data:{
        list:[
            "Comprare il pane",
            "Andare alle poste",
            "Ricaricare il telefono",
            "Ripassare HTML e CSS",
        ],
        newItem:"",
    },
    methods:{
        removeItem(i){
            this.list.splice(i, 1);
        },
        addItem(){
            if(this.newItem.trim() != "" && !this.list.includes(this.newItem)){
                this.list.push(this.newItem);
            };
            this.newItem = "";
        },
    },
}); 