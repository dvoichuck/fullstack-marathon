main_func()

function main_func() {
    let animal_name;
    let gender;
    let age;
    let reg_male = RegExp("^male$", 'i');
    let reg_female = RegExp("^female$", 'i');

    animal_name = check_name();
    if (!animal_name)
        return false;
    gender = check_gen();
    if (gender === "kostyl")
        return false;
    age = check_age();
    if (!age)
        return false;

    if (gender.match(reg_male)) {
        if (age < 18) {
            animal_name += "-boy";
        } else {
            animal_name += "-man";
        }
    } else if (gender.match(reg_female)) {
        if (age < 18) {
            animal_name += "-girl";
        } else {
            animal_name += "-woman";
        }
    } else {
        if (age < 18) {
            animal_name += "-kid";
        } else {
            animal_name += "-hero";
        }
    }
    alert("The superhero name is: " + animal_name + "!");
}

function check_name() {
    let animal_name = prompt('What animal is the superhero most similar to?', '');
    let reg_name = RegExp("^[a-zA-Z]+$");

    if (!animal_name.match(reg_name) || animal_name.length > 20) {
        alert('error');
        return null;
    }
    return animal_name;
}
function check_gen() {
    let gender = prompt('Is the superhero male or female? Leave blank if unknown or other.', '');
    let reg_gen = RegExp("^male$|^female$|^$", 'i'); //"^[mM]ale$|^[Ff]emale$"

    if (!gender.match(reg_gen)) {
        alert('error');
        return "kostyl";
    }
    return gender;
}

function check_age() {
    let age = prompt('How old is the superhero?', '');
    let reg_age = RegExp("^[1-9][0-9]*$");

    if (!age.match(reg_age) || age.length > 5) {
        alert('error');
        return null;
    }
    return age;
}
