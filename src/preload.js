// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
window.addEventListener('DOMContentLoaded', () => {

    const dependencies = process.versions
    replaceText('title',
        Object.keys(dependencies).map(key => `${key}: ${dependencies[key]}`).join('\n')
    )
    console.log(dependencies)
})


const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
}