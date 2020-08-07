export class Vehicle {
  constructor(
    public id = 0,
    public plate = "",
    public type = "",
    public name = "",
    public fuel_type = "",
    public fuel_capacity = "",
    public manufacturer = "",
    public model = "",
    public note = "",
    public latitude = 51.678418,
    public longitude = 7.809007,
    public init_odo_value = 0,
    public odo_value = 0,
    public fuel_consumption = 0
  ) {}
}
