import { LightningElement } from 'lwc';

export default class ComboboxBasic extends LightningElement {
    value = '';

    get options() {
        return [
            { label: 'sad', value: 'Your Mood was so Sad' },
            { label: 'Happy', value: 'Your Mood Was Very Happy' },
            { label: 'Ok', value: 'Your Mood was ok Type Mood' },
            { label: 'Tension', value: 'Your Mood was so Tensed!!' },
        ];
    }
    handleChange(event) {
        this.value = event.detail.value;
    }
    get sad() {
        return this.value==='Your Mood was so Sad';
    }
    get happy()
    {
        return this.value==='Your Mood Was Very Happy';
    }
    get ok()
    {
        return this.value==='Your Mood was ok Type Mood';
    }
    get tension()
    {
        return this.value==='Your Mood was so Tensed!!';
    }
}
