using System.ComponentModel.DataAnnotations;

namespace API.Db.Models;

/// <summary>
/// A complete name with context
/// </summary>
public class Name
{
    /// <summary>
    /// First name
    /// </summary>
    [Key]
    public string name { get; set; }
    
    /// <summary>
    /// Meaning of first name
    /// </summary>
    public string meaning { get; set; }
    
    /// <summary>
    /// Gender
    /// </summary>
    public string gender { get; set; }
    
    /// <summary>
    /// Purpose for generated name
    /// </summary>
    public string purpose { get; set; }
    
    /// <summary>
    /// Surname
    /// </summary>
    public string lastname { get; set; }

    /// <summary>
    /// Meaning of surname
    /// </summary>
    public string lastmeaning { get; set; }
}