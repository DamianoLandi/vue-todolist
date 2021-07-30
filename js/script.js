const root = new Vue({
    el: "#root",
    data:{
        list:[
            {
                text: "Comprare il pane",
                done: false,
            },
            {
                text: "Andare alle poste",
                done: false,
            },
            {
                text: "Ricaricare il telefono",
                done: false,
            },
            {
                text: "Ripassare HTML e CSS",
                done: false,
            },
        ],
        newItem:"",

    },
    methods:{
        removeItem(i){
            this.list.splice(i, 1);
        },
        addItem(){
            if(this.newItem.trim() != "" && !this.list.includes(this.newItem)){
                this.list.push({text: this.newItem, done: false});
            };
            this.newItem = "";
        },
        toggleDone(i){
            const newList = this.list.map((item, currentIndex) => {
                if(currentIndex === i){
                    return {text: this.list[currentIndex].text, done: !this.list[currentIndex].done}
                }else{
                    return this.list[currentIndex];
                };
            });
            this.list = newList;
        }
    },
}); 