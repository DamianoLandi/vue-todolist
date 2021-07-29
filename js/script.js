const root = new Vue({
    el: "#root",
    data:{
        list:[
            "Comprare il pane",
            "Andare alle poste",
            "Ricaricare il telefono",
            "Ripassare HTML e CSS",
        ]
    },
    methods:{
        removeItem(i){
            this.list.splice(i, 1);
        }
    },
}); 