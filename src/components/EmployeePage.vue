<template>
    <h1>Employee Page</h1>
    <ul>
        <li v-for="employee of employees" :key="employee.id">

            <input type="checkbox" v-on:change="update(employee.id)">
            {{ employee.name }}
        </li>
    </ul>
    <div v-for="employee of employees" :key="employee.id">
        <div v-if="employee.isSelected">
            <ul>
                <li>Id : <span>{{ employee.id }}</span></li>
                <li>Name : <span>{{ employee.name }}</span></li>
                <li>Email : <span>{{ employee.email }}</span></li>
            </ul>
        </div>
    </div>

</template>
<script>
export default {
    name: 'EmployeePage',
    data: function () {
        return {
            employees: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    isSelected: false
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                    isSelected: false
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                    "username": "Samantha",
                    "email": "Nathan@yesenia.net",
                    isSelected: false
                },
                {
                    "id": 4,
                    "name": "Patricia Lebsack",
                    "username": "Karianne",
                    "email": "Julianne.OConner@kory.org",
                    isSelected: false
                },
                {
                    "id": 5,
                    "name": "Chelsey Dietrich",
                    "username": "Kamren",
                    "email": "Lucio_Hettinger@annie.ca",
                    isSelected: false
                }
            ]
        }
    },
    methods: {
        update: function (empId) {
            this.employees = this.employees.map(employee => {
                if (employee.id === empId) {
                    return {
                        ...employee,
                        isSelected: !employee.isSelected
                    }
                } else return employee;
            })
        }
    }
}
</script>

<style></style>