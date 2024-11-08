function toggleAccordion(accordionItemId, expandedContentId) {
    const allRadioButtons = document.querySelectorAll('.radio-input');
    
    allRadioButtons.forEach(button => {
        button.checked = false;
    });

    document.querySelectorAll('.accordion-item').forEach(item => {
        item.style.display = 'flex'; 
    });
    document.querySelectorAll('.expanded').forEach(content => {
        content.style.display = 'none';
    });

    const clickedAccordion = document.getElementById(accordionItemId);
    const radioButton = clickedAccordion.querySelector('.radio-input');
    radioButton.checked = true; 

    document.getElementById(accordionItemId).style.display = 'none';
    document.getElementById(expandedContentId).style.display = 'block';
}
