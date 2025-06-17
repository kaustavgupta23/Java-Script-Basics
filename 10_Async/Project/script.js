// KEYDOWN EVENT HANDLER
// Displays key information when any key is pressed

// Get the element where key info will be displayed
const insert = document.getElementById('insert');

// Add event listener for keydown events
window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class="color">
        <table>
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key === " " ? "Space" : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    </div>
    `;
});