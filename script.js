function show_hide(element)
{
  if (element.style.display == "")
    element.style.display = "block";
  else if(element.style.display =="none")
    element.style.display = "block";
  else
    element.style.display = "none";
}