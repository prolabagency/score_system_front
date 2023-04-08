export class MonthManager {

    months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ]

    get(idx) {
        return this.months[idx - 1];
    }

    getCurrentMonth() {
        const date = new Date();
        const monthIdx = date.getMonth()
        return this.months[monthIdx]
    }

}