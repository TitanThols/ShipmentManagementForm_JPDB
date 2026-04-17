# Shipment Management Form

## Table of Contents
- Description
- Benefits of using JsonPowerDB
- Scope of Functionalities
- Examples of Use
- Project Status
- Release History
- Illustrations
- Sources
- Other Information

---

## Description
The **Shipment Management Form** is a lightweight, frontend-driven web application designed to manage and track the data of shipments. Built using HTML, Bootstrap, jQuery, and **JsonPowerDB (JPDB)**, this application allows users to create new shipment records, seamlessly search for existing ones, and update shipment details. 

By leveraging JsonPowerDB as a backend REST API, the application requires no traditional server-side scripting (like PHP or Node.js) to manage the database—everything is handled directly from the client side!

---

## Benefits of using JsonPowerDB
[JsonPowerDB (JPDB)](https://login2explore.com/jpdb/) is a High Performance, Light Weight, Ajax Enabled, Serverless, Simple to Use, Real-time Database.

1. **Serverless Architecture:** Reduces the need for backend code; API calls are made directly from the frontend to the database; Cuts the time to market.

2. **Lightning Fast:** Extremely fast REST APIs for CRUD operations.

3. **Schema-free & NoSQL:** Data is stored in standard JSON format, allowing flexible record structures without rigid schemas.

4. **Multi-Mode DBMS:** Works effortlessly as a Key-Value, Document, and Relational database all at once.

5. **Easy Maintenance:** Drastically reduces development time and server maintenance costs.

6. **Minimizes Complexity:** Works efficiently to reduce the complexity of interoperability of different applications.

7. **Security:** There are multiple security layers.

---

## Scope of Functionalities

This application provides the following core database operations:

1. **Asynchronous Data Retrieval (Read):** Users can enter a `Shipment No`. Upon clicking away (blur) or hitting `Enter`, the system automatically checks JPDB.

2. **Smart Form State Management:** If the shipment exists, the form unlocks and populates the remaining fields for editing. If it is a new shipment, it prepares the form for a new entry.

3. **Add New Records (Create):** Validates user input and saves new shipment details 
(Description, Source, Destination, Shipping Date, Delivery Date) securely to the database.

4. **Modify Records (Update):** Allows users to modify details of an existing shipment and push the updated JSON record back to JPDB.

5. **Form Reset:** Quickly clears the interface to manage a new query.

---

## Examples of Use

1. **Adding a New Shipment:**
   - Type a new ID into the **Shipment No** field and hit `Enter`.
   - The system checks the database, finds no existing record, and unlocks the rest of the form.
   - Fill in the Description, Source, Destination, and Dates.
   - Click **Save**.

2. **Updating a Shipment:**
   - Type an *existing* ID into the **Shipment No** field and hit `Enter`.
   - The system automatically fetches the data and fills out the form.
   - Change the required fields (e.g., extend the *Expected Delivery Date*).
   - Click **Update**.

---

## Project Status
**Active / Completed** - The core CRUD functionalities are implemented and successfully integrated with JsonPowerDB. 

---

## Release History
**v1.0.0** (Current)
  * Initial Release.
  * Added UI using Bootstrap 3.4.1.
  * Implemented Create, Read, and Update operations via JPDB API.
  * Added `blur` and `Enter` key event listeners for autoloading shipment data.

---

## Illustrations
*(Add your screenshots here to make the repository look professional)*

**1. Main Dashboard View:**
> ![Main UI View](https://github.com/TitanThols/ShipmentManagementForm_JPDB/blob/main/images/Screenshot_1.png?raw=true)

**2. Auto-Populated Data View:**
> ![Update Mode](https://github.com/TitanThols/ShipmentManagementForm_JPDB/blob/main/images/Screenshot_2.png?raw=true)

---

## Sources
* **JsonPowerDB:** [Login2Explore Documentation](http://login2explore.com/jpdb/docs.html)
* **Bootstrap:** [Bootstrap 3.4 Docs](https://getbootstrap.com/docs/3.4/)
* **jQuery:** [jQuery API](https://api.jquery.com/)

---

## Other Information
* **Database Name:** `Delivery`
* **Relation Name:** `Shipment-Rel`
* **Connection Token:** 90xx5275|-31949235xxx424822|909xx568

**Author:** Tholkappian Murugesan
