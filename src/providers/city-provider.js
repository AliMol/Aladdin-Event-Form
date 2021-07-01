export default function getCityWithTimezones() {
    console.log('cities get')
    const options = [
        { value: 'Dubai', label: 'Dubai', timezone: 'Dubai - United Arab Emirates (GMT+4)' },
        { value: 'Bangkok', label: 'Bangkok', timezone: 'Bangkok, Thailand (GMT+7)' },
        { value: 'Doha', label: 'Doha', timezone: 'Doha, Qatar (GMT+3)' },
        { value: 'İstanbul', label: 'İstanbul', timezone: 'İstanbul, Turkey (GMT+3)' },
        { value: 'Kuala Lumpur', label: 'Kuala Lumpur', timezone: 'Kuala Lumpur, Malaysia (GMT+8)' },
    ]

    return options;
}