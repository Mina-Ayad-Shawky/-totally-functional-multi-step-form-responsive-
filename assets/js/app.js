$(document).ready(function () {
  let stpageinputs = $(".stinput");
  let next1 = $("#next1");
  let next2 = $("#next2");
  let back2 = $("#back2");
  let next3 = $("#next3");
  let back3 = $("#back3");
  let back4 = $("#back4");
  let confirm = $("#confirm");
  let validationText = $(".validationtext");
  let parent1 = $(".parent1");
  let parent2 = $(".parent2");
  let parent3 = $(".parent3");
  let parent4 = $(".parent4");
  let parent5 = $(".parent5");
  let plan = $(".plan")
  let plan1 = $(".plan1");
  let plan2 = $(".plan2");
  let plan3 = $(".plan3");
  let addonsChilds = $(".addons-child");
  let checkBox = $("#checking");
  let finalPlan = $("#final-plan");
  let finalPlanPrice = $("#final-plan-price");
  let PlanName = $("#Plan-name");
  let totalPerX = $("#total-per-x");
  let totalPrice = $("#total-price");
  let service = $(".serv");
  let serv1 = $("#serv1");
  let serv2 = $("#serv2");
  let serv3 = $("#serv3");
  let sss = $(".sss");
  let x = false; // Declare x here to make it accessible in the entire function
  let y;
  console.log();
  $(".plan").click(function () {
    $(this).addClass("bord");
    $(this).siblings().removeClass("bord");
    y = $(this).find("#plan-name").text();
    z = $(this).find(".price000").text();
    console.log(z);
    if (x) {
      finalPlan.text(`${y} (yearly)`);
      finalPlanPrice.text(`${z}`);
    } else {
      finalPlan.text(`${y} (monthly)`);
      finalPlanPrice.text(`${z} `);
    }

  })
  sss.click(function () {
    let existingServ = $(".serv:contains('" + $(this).find("#lala").text() + "')");
    if (existingServ.length > 0) {
      existingServ.remove(); // Remove if it exists
    } else {
      // Add a new div.serv if it doesn't exist
      $(".servParent").append(`
        <div class="row m-0 justify-content-between serv">
          <p style="font-size: 13px; color: #bbb;">
            ${$(this).find("#lala").text()} 
          </p>
          <p style="font-size: 13px;">${$(this).find("#lolo").text()}</p>
        </div> 
      `);
    }
  })


  function updateTotalPrice() {
    // Parse and log the plan price
    let planPriceText = finalPlanPrice.text();
    console.log("Plan Price Text:", planPriceText);
    let planPrice = parseFloat(planPriceText.replace(/[^0-9.]/g, '')) || 0;
    console.log("Parsed Plan Price:", planPrice);

    let servicesTotal = 0;

    // Iterate over each .serv and log the service price
    $(".serv").each(function () {
      let servicePriceText = $(this).children().last().text();
      console.log("Service Price Text:", servicePriceText);
      let servicePrice = parseFloat(servicePriceText.replace(/[^0-9.]/g, '')) || 0;
      console.log("Parsed Service Price:", servicePrice);
      servicesTotal += servicePrice;
    });

    console.log("Total Services Price:", servicesTotal);

    // Calculate the total and log it
    let total = planPrice + servicesTotal;
    console.log("Total Price:", total);

    // Display the sum in #total-price
    totalPrice.text(`$ ${total.toFixed(2)}`);
  }

  // Call updateTotalPrice() whenever you make changes that affect the total
  $(".plan, .sss").click(function () {
    updateTotalPrice();
  });

  $('#toggleSwitch').change(function () {
    updateTotalPrice();
  });

















  let checkvalidation = function () {
    for (let i = 0; i < stpageinputs.length; i++) {
      // checking on first input
      if (i == 0) {
        if (stpageinputs[0].value == "") {
          $(validationText[i]).removeClass("none");
          $(stpageinputs[i]).addClass("red");
        } else if (stpageinputs[0].value.length <= 3) {
          $(validationText[i]).removeClass("none");
          $(stpageinputs[i]).addClass("red");
        } else {
          $(validationText[i]).addClass("none");
          $(stpageinputs[i]).removeClass("red");
        }
      }
      // checking on second inputs
      if (i == 1) {
        if (stpageinputs[1].value == "") {
          $(validationText[i]).removeClass("none");
          $(stpageinputs[i]).addClass("red");
        } else if (stpageinputs[1].value.length <= 11) {
          $(validationText[i]).removeClass("none");
          $(stpageinputs[i]).addClass("red");
        } else {
          $(validationText[i]).addClass("none");
          $(stpageinputs[i]).removeClass("red");
        }
      }

      if (i == 2) {
        if (stpageinputs[2].value == "") {
          $(validationText[i]).removeClass("none");
          $(stpageinputs[i]).addClass("red");
        } else if (stpageinputs[2].value.length != 11) {
          $(validationText[i]).removeClass("none");
          $(stpageinputs[i]).addClass("red");
        } else {
          $(validationText[i]).addClass("none");
          $(stpageinputs[i]).removeClass("red");
        }
      }
    }
    for (let i = 0; i < stpageinputs.length; i++) {
      if (stpageinputs[0].classList.contains("red") || stpageinputs[1].classList.contains("red") || stpageinputs[2].classList.contains("red")) {} else {
        parent1.removeClass("z-index");
        parent2.addClass("z-index");
        parent1.addClass("d-none");
        parent2.removeClass("d-none");
        parent3.addClass("d-none");
        parent4.addClass("d-none");
        parent5.addClass("d-none");

      }
    }
  }




  $('#toggleSwitch').change(function () {
    if ($(this).is(':checked')) {
      // Action when the slider is on the right (checked)
      $(".plan").append(`<small class="free-month" style="font-size: 10px; color: hsl(213, 96%, 18%);">2 months free</small>`)
      $("#price1").text("$ 90/yr");
      $("#price2").text("$ 120/yr");
      $("#price3").text("$ 150/yr");
      x = true;
      finalPlan.text("(yearly)");
      totalPerX.text("Total (per year) ");
      console.log(x);

    } else {
      // Action when the slider is on the left (unchecked)
      $(".free-month").remove();
      $("#price1").text("$ 9/mo");
      $("#price2").text("$ 12/mo");
      $("#price3").text("$ 15/mo");
      x = false;
      finalPlan.text(" (monthly)");
      totalPerX.text("Total (per month) ");

      console.log(x);

    }
  });


  console.log(plan);


  next1.click(checkvalidation);
  back2.click(function () {
    parent1.addClass("z-index");
    parent2.removeClass("z-index");
    parent2.addClass("d-none");
    parent1.removeClass("d-none");

    parent3.addClass("d-none");
    parent4.addClass("d-none");
    parent5.addClass("d-none");

  })
  next2.click(function () {
    for (let i = 0; i < plan.length; i++) {
      if ($(plan[i]).hasClass("bord")) {
        parent3.addClass("z-index");
        parent3.removeClass("d-none");
        parent2.addClass("d-none");
        parent1.addClass("d-none");
        parent4.addClass("d-none");
        parent5.addClass("d-none");
      }
    }

  })
  back3.click(function () {
    parent2.addClass("z-index");
    parent3.removeClass("z-index");

    parent2.removeClass("d-none");
    parent1.addClass("d-none");
    parent3.addClass("d-none");
    parent4.addClass("d-none");
    parent5.addClass("d-none");
  })
  next3.click(function () {
    parent4.addClass("z-index");
    parent3.removeClass("z-index");

    parent3.addClass("d-none");
    parent2.addClass("d-none");
    parent1.addClass("d-none");
    parent4.removeClass("d-none");
    parent5.addClass("d-none");
  })
  back4.click(function () {
    parent3.addClass("z-index");
    parent4.removeClass("z-index");

    parent3.removeClass("d-none");
    parent2.addClass("d-none");
    parent1.addClass("d-none");
    parent4.addClass("d-none");
    parent5.addClass("d-none");
  })
  confirm.click(function () {
    parent5.addClass("z-index");
    parent4.removeClass("z-index");
    parent1.addClass("d-none");
    parent2.addClass("d-none");
    parent1.addClass("d-none");
    parent4.addClass("d-none");
    parent5.removeClass("d-none");
    $(".white").addClass("d-none");
    $('#confirm , #back4 , #back3 , #back2 , #back1 , #next3 , #next2 , #next1').addClass("d-none");
  })

  addonsChilds.click(function () {
    $(this).toggleClass("addons-child-border");
    $(this).children().first().prop("checked", function (index, oldValue) {
      return !oldValue;
    });
    // console.log($(this).children().first());


  })

})